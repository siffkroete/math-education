import { BehaviorSubject, Observable, of, fromEvent } from 'rxjs';
import { buffer, bufferCount, expand, filter, map, switchMap, takeUntil, merge, takeWhile, take,
    share, tap, withLatestFrom } from 'rxjs/operators';
import styledash from "../styledash.js";
import "./css/index.css";
import { animationFrameScheduler as animScheduler } from 'rxjs';
import { interval } from 'rxjs';


(function __start__() {
    

})()

(function r(f) {
	/in/.test(document.readyState) ? setTimeout(function () {
		r(f);
	}, 9) : f();
})(__start__);