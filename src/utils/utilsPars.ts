const sortButton = document.querySelectorAll(".Works_footerCategoryBtn__5cEKe");
const sortCard = document.querySelectorAll(".CategoryButton_categoryBtn__Ct37O");

sortButton.forEach(button => {
  button.addEventListener("change", () => {
    flip();
  });
});

const flip = () => {
  // 選択中の色を取得
  // 例：["red", "blue"]
  const colors  = [...colorCheckBoxes]
    .filter(checkbox => checkbox.checked)
    .map(input => input.value);

  // 1. すべてのboxのスタイルを取得
  const prevMap = new Map();
  boxes.forEach((box) => {
      const id = box.dataset.id;
      const style = box.getBoundingClientRect();
      prevMap.set(id, style);
    }
  );
  // 2. boxのスタイルを変更
  boxes.forEach(box => {
    box.classList.toggle("hidden", !colors.includes(box.dataset.color));
  });

  // それぞれのboxにアニメーションを適用
  boxes.forEach(box => {
    // 3. 変更後のスタイルを取得
    const next = box.getBoundingClientRect();
    const prev = prevMap.get(box.dataset.id);
    // display: noneとなっているboxはwidthが0かどうかで判別する
    // 出現するboxはFLIPさせずにふわっと表示
    if(prev.width === 0){
      box.animate([{opacity: 0}, {opacity: 1}], {duration: 200});
      return;
    }
    // 4. 移動のアニメーションを適用
    box.animate([{
      translate: `${prev.x - next.x}px ${prev.y - next.y}px`,
    },
      {
        translate: "0 0",
      },
    ], {
      duration: 400,
      easing: "cubic-bezier(0.22, 1, 0.36, 1)",
    });
  });
};