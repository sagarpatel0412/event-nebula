import React from "react";
import Slider from "react-slick";
import { slickSettings } from "../../helpers/essentials";

export function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

export function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

function SlickCarasoulComponent(props: any) {
  return (
    <Slider
      {...slickSettings}
      // nextArrow={<SampleNextArrow />}
      // prevArrow={<SamplePrevArrow />}
    > 
      <div style={{outline:"none"}}>
        {/* <img src={}/> */}
        <div>
          <img
            src="https://unsplash.com/photos/1dW1vEJLlCQ/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NHx8ZXZlbnRzfGVufDB8fHx8MTY4MjMyMzkyMg&force=true&w=1920"
            width={"200px"}
            height={"200px"}
          />
        </div>
        <div>
          <h1>title</h1>
          <p>hello hello</p>
        </div>
      </div>
      <div>
        {/* <img src={}/> */}
        <div>
          <img
            src="https://unsplash.com/photos/1dW1vEJLlCQ/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NHx8ZXZlbnRzfGVufDB8fHx8MTY4MjMyMzkyMg&force=true&w=1920"
            width={"200px"}
            height={"200px"}
          />
        </div>
        <div>
          <h1>title</h1>
          <p>hello hello</p>
        </div>
      </div>
      <div>
        {/* <img src={}/> */}
        <div>
          <img
            src="https://unsplash.com/photos/1dW1vEJLlCQ/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NHx8ZXZlbnRzfGVufDB8fHx8MTY4MjMyMzkyMg&force=true&w=1920"
            width={"200px"}
            height={"200px"}
          />
        </div>
        <div>
          <h1>title</h1>
          <p>hello hello</p>
        </div>
      </div>
      <div>
        {/* <img src={}/> */}
        <div>
          <img
            src="https://unsplash.com/photos/1dW1vEJLlCQ/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NHx8ZXZlbnRzfGVufDB8fHx8MTY4MjMyMzkyMg&force=true&w=1920"
            width={"200px"}
            height={"200px"}
          />
        </div>
        <div>
          <h1>title</h1>
          <p>hello hello</p>
        </div>
      </div>
      <div>
        {/* <img src={}/> */}
        <div>
          <img
            src="https://unsplash.com/photos/1dW1vEJLlCQ/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NHx8ZXZlbnRzfGVufDB8fHx8MTY4MjMyMzkyMg&force=true&w=1920"
            width={"200px"}
            height={"200px"}
          />
        </div>
        <div>
          <h1>title</h1>
          <p>hello hello</p>
        </div>
      </div>
      <div>
        {/* <img src={}/> */}
        <div>
          <img
            src="https://unsplash.com/photos/1dW1vEJLlCQ/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NHx8ZXZlbnRzfGVufDB8fHx8MTY4MjMyMzkyMg&force=true&w=1920"
            width={"200px"}
            height={"200px"}
          />
        </div>
        <div>
          <h1>title</h1>
          <p>hello hello</p>
        </div>
      </div>
      <div>
        {/* <img src={}/> */}
        <div>
          <img
            src="https://unsplash.com/photos/1dW1vEJLlCQ/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NHx8ZXZlbnRzfGVufDB8fHx8MTY4MjMyMzkyMg&force=true&w=1920"
            width={"200px"}
            height={"200px"}
          />
        </div>
        <div>
          <h1>title</h1>
          <p>hello hello</p>
        </div>
      </div>
    </Slider>
  );
}

export default SlickCarasoulComponent;
