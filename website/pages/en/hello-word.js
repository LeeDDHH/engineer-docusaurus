const React = require('react');
const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock;
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

function HelloWorld(props) {
  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer postContainer">
        <MarkdownBlock>
          # Hello world!


          *This is my first page!*
        </MarkdownBlock>
      </Container>
    </div>
  );
}

module.exports = HelloWorld;
