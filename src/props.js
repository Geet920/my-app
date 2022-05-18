import './props.css';
function Welcome({ name, address }) {
    return <h1>{name} {address}</h1>
}
function Props() {
    return (
        <div className="welcome">
            <Welcome name="Sara" address="Akampat" />
            <Welcome name="Cahal" address="Bihar" />
            <Welcome name="Edite" address="Kolkata" />

        </div>
    );
}

export default Props;


