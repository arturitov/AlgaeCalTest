// import {ProductBundles} from "./modules/ProductBundles";
import './styles/main.scss';
import loadSVGs from './modules/svg-replace';
import 'popper.js';
import 'bootstrap';

document.addEventListener('DOMContentLoaded', () => {
  loadSVGs();
});


var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://www.algaecal.com/wp-json/acf/v3/options/options');
xhr.onload = function() {
    if (xhr.status === 200) {
        const acf = JSON.parse(xhr.responseText).acf;

        document.getElementById("play-button-overlay-zwflowymel")
            .addEventListener("click", function(){
              _wq.push({ id: 'sp-video_zwflowymel', onReady: function(video) {
                video.play();
                document
                  .querySelector('.custom-wistia-play-button').style.display = "none";
              }});
            });

        document.getElementById("gurantee-modal-link")
          .addEventListener("click", function(){
            var xhr = new XMLHttpRequest();
            xhr.open('GET', 'https://www.algaecal.com/wp-json/acf/v3/options/options');
            xhr.onload = function() {
                if (xhr.status === 200) {
                    const modalContent = acf["7yr_full_copy"];
                    document.getElementById('guarantee-modal-body').innerHTML = modalContent;
                      _wq.push({ id: 'sp-wistia-inc-oxo4ak3z2d', onReady: function(video) {
                      }});
                }
            };
            xhr.send();
          });


        const officeHours = acf.office_hours;

        var date = new Date();
        const day = date.getDay();
        const localeOptions = {
          timeZone: "America/Los_Angeles",
          hour12: false,
          timeStyle: 'short'
        }
        const currentTime = date.toLocaleTimeString("en-US", localeOptions).split(":").join('');
        const startingTime = officeHours[day].starting_time;
        const closingTime =  officeHours[day].closing_time;

        if(currentTime < startingTime || currentTime > closingTime){
            const removeElem = document.querySelector('.speak-to-our-bone-specialists');
            removeElem.parentNode.removeChild(removeElem);
          }

        var usaTime = new Date().toLocaleString("en-US", {timeZone: "America/Los_Angeles"});
    }
};
xhr.send();
