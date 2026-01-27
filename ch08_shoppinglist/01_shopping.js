// 1. 데이터를 담을 바구니 (품목과 가격이 담긴 객체들이 저장될 배열입니다)
let shoppingItems = [];
let totalAmount = [];
const budgetLimit = 50000;
// 2. HTML 요소들을 변수로 가져오기
const addBtn = document.querySelector('#add-btn');
const itemInput = document.querySelector('#shopping-input');
const priceInput = document.querySelector('#price-input');
const shoppingList = document.querySelector('#shopping-list');
const totalDisplay = document.querySelector('#total-display')
// 3. 화면을 그려주는 핵심 함수 (render)
function renderShoppingList() {
    // 먼저 기존 리스트를 싹 지워서 중복 방지!
    shoppingList.innerHTML = '';
    let currentTotal = 0;
    // 바구니에 있는 물건들을 하나씩 꺼내서 화면에 만듭니다
    shoppingItems.forEach((itemObj, index) => {
        const li = document.createElement('li');
        li.className = 'shopping-app__item'; // CSS 꾸미기용

        // 품목명과 가격을 합쳐서 보여줍니다 (가격을 세 자릿수마다 콤마 찍기 포함)
        li.innerHTML = `
            <div class="item-info">
                <span class="item-name"><strong>${itemObj.name}</strong></span>
                <span class="item-price">${Number(itemObj.price).toLocaleString()}원</span>
            </div>
            <button class="delete-btn" onclick="deleteItem(${index})">삭제</button>
        `;

        shoppingList.appendChild(li);

        currentTotal += Number(itemObj.price);
    });

    totalAmount = currentTotal;
    totalDisplay.innerText = totalAmount.toLocaleString();

}


// 4. 추가 버튼을 눌렀을 때 실행될 함수
function addItem() {
    const name = itemInput.value.trim();
    const price = Number(priceInput.value.trim());

    // 빈칸 검사: 둘 다 입력해야 추가됩니다
    if (name === "" || price === "") {
        alert("품목과 가격을 모두 입력해주세요! 😊");
        return;
    }

    if(totalAmount+price> budgetLimit){
      alert('⚠️예산 5만원초과')
      return;
    }


    // 데이터 바구니에 객체 형태로 저장
    shoppingItems.push({
        name: name,
        price: price
    });

    // 화면 다시 그리기
    renderShoppingList();

    // 다음 입력을 위해 칸 비우기
    itemInput.value = '';
    priceInput.value = '';
    itemInput.focus();
}

// 5. 삭제 버튼을 눌렀을 때 실행될 함수
function deleteItem(index) {
    // 해당 번째(index) 물건을 배열에서 삭제
    shoppingItems.splice(index, 1);
    // 화면 다시 그리기
    renderShoppingList();
}

// 6. 이벤트 연결: 버튼 클릭 시 addItem 실행
addBtn.addEventListener('click', addItem);

// (꿀팁) 가격 입력창에서 Enter 키를 눌러도 추가되게 설정
priceInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addItem();
});

