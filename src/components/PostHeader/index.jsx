import React from "react";
import Img from "gatsby-image";
import "moment/locale/de"; // without this like it didn't work
import "./style.scss";

class PostHeader extends React.Component {
  render() {
    const { featuredImage } = this.props;

    return (
      <div className="PostHeader">
        <div className="PostHeader--inner">
          <div className="PostHeader--img">
            <Img sizes={featuredImage.childImageSharp.sizes} fadeIn={false} />
          </div>
        </div>
      </div>
    );
  }
}

export default PostHeader;
