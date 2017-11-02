React.render(
  <h1>Hello World!</h1>,
  document.getElementById('react-example')
);

var HelloWorldComponent = React.createClass({
  render() {
    return (
      <h1>Hello World!!!!!</h1>
    );
  }
});

React.render(
  <HelloWorldComponent />,
  document.getElementById('react-example-with-class')
);

class HelloWorldComponentWithValue extends React.Component {
  render() {
    return <h1>Hello {this.props.name} {this.props.surname}!!!!!</h1>;
  }
}

React.render(
  <HelloWorldComponentWithValue name="Hugo" surname="Vila" />,
  document.getElementById('react-example-with-value')
)