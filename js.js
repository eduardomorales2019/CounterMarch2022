let items = [...document.querySelectorAll(".number")];

const Update = (el) => {
  const value = parseInt(el.dataset);
  const increment = Math.ceil(value / 20);
  let InitialValue = 0;

  function increaseValue() {
    setInterval(() => {
      InitialValue += increaseValue();

      if (InitialValue > value) {
        el.textContext = `${value}+`;
        clearInterval(increaseValue);
        return;
      }
      el.textContext = `${InitialValue}+`;
      console.log(InitialValue);
    }, 1);
  }
};

items.forEach((item) => {
  console.log(item);
  Update(item);
});
