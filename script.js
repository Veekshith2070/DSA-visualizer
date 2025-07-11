const arrayContainer = document.getElementById("array");
    let values = [];

    function generateArray(size = 30) {
      arrayContainer.innerHTML = "";
      values = Array.from({ length: size }, () => Math.floor(Math.random() * 250) + 20);

      values.forEach((value) => {
        const bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = `${value}px`;
        arrayContainer.appendChild(bar);
      });
    }

    async function bubbleSort() {
      const bars = document.querySelectorAll(".bar");
      for (let i = 0; i < bars.length - 1; i++) {
        for (let j = 0; j < bars.length - i - 1; j++) {
          bars[j].classList.add("active");
          bars[j + 1].classList.add("active");

          await new Promise((resolve) => setTimeout(resolve, 50000));

          const height1 = parseInt(bars[j].style.height);
          const height2 = parseInt(bars[j + 1].style.height);

          if (height1 > height2) {
            bars[j].style.height = `${height2}px`;
            bars[j + 1].style.height = `${height1}px`;

            [values[j], values[j + 1]] = [values[j + 1], values[j]];
          }

          bars[j].classList.remove("active");
          bars[j + 1].classList.remove("active");
        }
      }
    }

    generateArray(); 
