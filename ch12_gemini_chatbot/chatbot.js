const chatHistory = document.getElementById('chat-history');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');
const loadingIndicator = document.getElementById('loading');
const apikeyModal = document.getElementById('api-key-modal');
const apikeyInput = document.getElementById('api-key-input');
const saveKeyBtn = document.getElementById('save-key-btn');

let GOOGLE_API_KEY = '';

saveKeyBtn.addEventListener('click', ()=> {
  const key = apikeyInput.value.trim();
  if(key){
    GOOGLE_API_KEY =key;
    apikeyModal.style.display = 'none';  //모달이닫힘
  }else{
    alert("api key를 입력해주세요")
  }
});

//2.메시지전송기능
async function sendMessage() {
  const message = userInput.value.trim();

  if(message == '') return;

  //사용자메시지표시
  appendMessage('user', message);
  userInput.value = ''; //입력창 초기화

  //2. 로딩 애니메이션
  showLoading(true);

  try{
    // 3) gemini api호출 fetch api
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GOOGLE_API_KEY}`, {
      method:'post',
      headers:{
        'Content-Type': 'application/json', 
      },
      body: JSON.stringify({
          contents: [{
            parts: [{ text: message }]
          }]
      })
    });
    
    const data = await response.json(); //responce.data 대표상수명

    // 4)응답데이터확인
    if(data.candidates && data.candidates[0].content){
      const botResponse = data.candidates[0].content.parts[0].text;
      appendMessage('bot', botResponse);
    }else{
      appendMessage('bot','죄송합니다 오류발생 api key확인해요 ');
      console.log('Error', data);
    }
    
  }catch(error){
    console.log('Fetch error : ', error);
    appendMessage('bot', '네트워크오류발생');
  }finally{

    showLoading(false);
  }
}

//3. 화면에 메시지 추가
function appendMessage(sender, text){
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('message');
  messageDiv.classList.add(sender== 'user' ? 'user-message' : 'bot-message');

  let formattedText = text.replace(/\n/g , '<br>');
  messageDiv.innerText = formattedText;

  chatHistory.appendChild(messageDiv);

  chatHistory.scrollTop = chatHistory.scrollHeight;
}

//4.로딩상태제어
function showLoading(isloading){
  if(isloading){
    loadingIndicator.style.display = 'block';
    chatHistory.scrollTop = chatHistory.scrollHeight;
  }else{
    loadingIndicator.style.display = 'none';
  }
}

//이벤트리스너
sendBtn.addEventListener('click', sendMessage);

//엔터키 입력시에 전송하도록
userInput.addEventListener('keypress', e =>{
  if(e.key == 'Enter') sendMessage();
});
