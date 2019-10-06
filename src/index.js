// import {ProductBundles} from "./modules/ProductBundles";
import './styles/main.scss';
import loadSVGs from './modules/svg-replace';
import 'popper.js';
import 'bootstrap';

document.addEventListener('DOMContentLoaded', () => {
  loadSVGs();
});

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
    console.log("click")
    xhr.open('GET', 'https://www.algaecal.com/wp-json/acf/v3/options/options');
    xhr.onload = function() {
        if (xhr.status === 200) {
            const modalContent = JSON.parse(xhr.responseText)["acf"]["7yr_full_copy"];
            document.getElementById('guarantee-modal-body').innerHTML = modalContent;
              _wq.push({ id: 'sp-wistia-inc-oxo4ak3z2d', onReady: function(video) {
              }});
        }
    };
    xhr.send();
  });
