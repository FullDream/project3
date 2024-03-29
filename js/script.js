window.addEventListener('load', function(){

    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }
    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', (event) => {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    //time
    let deadLine = '2019-08-19';
    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            second = Math.floor(((t/1000) % 60)),
            minutes = Math.floor((t/1000/60) %60),
            hours = Math.floor((t/(1000*60*60)));
        
        return {
            total : t,
            hours : hours,
            minutes : minutes,
            second : second 
        };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            second = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock () {
            let t = getTimeRemaining(endtime);
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            second.textContent = t.second;


            
            function addZero(num) {
                if(num < 9){
                return'0' + num;
                } else return num;
               
            }
            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            second.textContent = addZero(t.second);

            if (t.total <= 0) {
                clearInterval(timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                second.textContent = '00';
            }


        }
    }

    setClock('timer', deadLine);

    //modal
    let more = document.querySelector('.more'),
        tabMore = document.querySelectorAll('.description-btn'),
        overlay = document.querySelector('.overlay'),
        close = this.document.querySelector('.popup-close');
    
    function moreAll(moreBtn) {
        moreBtn.addEventListener('click', () => {
            overlay.style.display = 'block';
            this.classList.add('more-splash');
            document.body.style.overflow = "hidden";
        });
        close.addEventListener('click', () => {
            overlay.style.display = 'none';
            moreBtn.classList.remove('more-splash');
            document.body.style.overflow = "";
        });
    }
    moreAll(more);
    for ( let i = 0; i < tabMore.length; i++){
        moreAll(tabMore[i]);
    }
    
});