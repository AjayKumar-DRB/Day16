const timer = document.getElementById('timer')

setTimeout(function () {
    timer.textContent = 10;
    setTimeout(function () {
      timer.textContent = 9;
      setTimeout(function () {
        timer.textContent = 8;
        setTimeout(function () {
          timer.textContent = 7;
          setTimeout(function () {
            timer.textContent = 6;
            setTimeout(function () {
              timer.textContent = 5;
              setTimeout(function () {
                timer.textContent = 4;
                setTimeout(function () {
                  timer.textContent = 3;
                  setTimeout(function () {
                    timer.textContent = 2;
                    setTimeout(function () {
                      timer.textContent = 1;
                      setTimeout(function () {
                        timer.textContent = 'Happy Independence Day!';
                      },1000);
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);