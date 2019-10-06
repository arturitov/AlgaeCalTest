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
