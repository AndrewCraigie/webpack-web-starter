import '../styles/styles.scss';

const app = () => {
    const appDiv = document.createElement('div');
    appDiv.innerHTML = '<h1>Web Starter Boilerplate</h1>';
    return appDiv;
}

document.getElementById('root').appendChild(app());
