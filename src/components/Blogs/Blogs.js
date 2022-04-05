import React from "react";

const Blogs = () => {
  return (
    <div>
      <h2 className="text-3xl text-violet-900 font-bold my-7">
        What is the purpose of context API?
      </h2>
      <p className="text-lg">
        <b>Answer: </b>Context API is a component structure which is provided by
        the REACT framework. It solved the problem of porps drilling. Context
        API helps us to share some specific data across the children components.
        When we have to pass a prop through a component so it reaches another
        component down the tree then we can use context API. Sometimes users
        need to change the theme of their app. Then we simply connect the data
        in the context Provider to the state of the parent element and then
        change this parent’s state using functions in props. A better way is to
        have the function that will change the context value passed down in the
        context itself.
      </p>
      <h2 className="text-3xl text-violet-900 font-bold my-7">
        What is semantic tag?
      </h2>
      <p className="text-lg">
        <b>Answer: </b>Semantic HTML add meaning to the web page rather than
        representation. Like I used a paragraph p tag that indicates that this
        answer is a paragraph. People know what paragraph is and browsers know
        the way of displaying them so that's why it is both semantic and
        presentational. On the other hand I used bold b tag it is not semantic
        cause they are only defining how the text will look. Semantic HTML tags
        gives information about the contents of those tags that goes beyond just
        how they look on a page. Like for coding languages there is a code tag
        using this tag browser recognize that it is some kind of coding
        language. Some examples of Semantic tags are :
        <ul className="font-semibold list-inside list-disc">
          <li>blockquote</li>
          <li>cite</li>
          <li>h1,h2,h3,h4,h5 and h6.</li>
          <li>address</li>
          <li>ul</li>
        </ul>
      </p>
    </div>
  );
};

export default Blogs;
