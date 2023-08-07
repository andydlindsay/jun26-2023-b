function MonkeyFuzz(props) {

  console.log(`props.moniker`, props.moniker);

  return (
    <div>
        <h2 className="abstract2">MonkeyFuzz HTML Goes 1.</h2>
        <h2 className="abstract2">MonkeyFuzz HTML Goes 2.</h2>
        <h2 className="abstract2">MonkeyFuzz HTML Goes 3.</h2>
        <h2 className="abstract2">MonkeyFuzz HTML Goes { props.moniker }.</h2>
        <h2 className="abstract2">MonkeyFuzz HTML Goes 5.</h2>
        <h2 className="abstract2">MonkeyFuzz HTML Goes 6.</h2>
        <h2 className="abstract2">MonkeyFuzz HTML Goes 7.</h2>
    </div>
  )
}

export default MonkeyFuzz;
