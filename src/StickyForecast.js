import React from "react";
import Hollow from "./StickIcon";
export default function StickyForecast(props) {
  return (
    <div className="stickyNote">
      <div className="note" id="first">
        <div className="weatherForeSticky">
          <div className="weatherForeDay"> monday </div>

          <Hollow code="01d" size={200} />
          <div className="WeatherForeTemp">
            <span className="max">19</span>° / <span className="min">19</span>°
          </div>
        </div>
      </div>
      <div className="note" id="second">
        <div className="weatherForeSticky">
          <div className="weatherForeDay"> monday </div>

          <Hollow code="01d" size={200} />
          <div className="WeatherForeTemp">
            <span className="max">19</span>° / <span className="min">19</span>°
          </div>
        </div>
      </div>
      <div className="note" id="third">
        <div className="weatherForeSticky">
          <div className="weatherForeDay"> monday </div>

          <Hollow code="01d" size={200} />
          <div className="WeatherForeTemp">
            <span className="max">19</span>° / <span className="min">19</span>°
          </div>
        </div>
      </div>
      <div className="note" id="fourth">
        <div className="weatherForeSticky">
          <div className="weatherForeDay"> monday </div>

          <Hollow code="01d" size={200} />
          <div className="WeatherForeTemp">
            <span className="max">19</span>° / <span className="min">19</span>°
          </div>
        </div>
      </div>
      <div className="note " id="last">
        <div className="weatherForeSticky">
          <div className="specialSticky">
            <div className="weatherForeDay"> friday </div>

            <Hollow code="01d" size={200} />
            <div className="WeatherForeTemp">
              <span className="max">19</span>° / <span className="min">19</span>
              °
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
