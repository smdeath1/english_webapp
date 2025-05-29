body {
    background-color: #2b2b2b;
    color: white;
    font-family: Arial, sans-serif;
    text-align: center;
    margin: 0;
    padding: 20px;
}

.title {
    font-size: 26px;
    margin-bottom: 20px;
}

.nav-buttons {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-bottom: 30px;
}

.nav-buttons button {
    background-color: #5ea3f3;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 8px;
}

.section {
    margin-top: 20px;
}

.button-list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0 auto;
    width: fit-content;
}

.button-list button {
    background-color: #cccccc;
    color: black;
    margin: 5px 0;
    padding: 10px;
    width: 200px;
    border: none;
    text-align: left;
    border-radius: 6px;
    cursor: pointer;
}

.word-area {
    margin-top: 20px;
}

#word-to-translate {
    font-size: 24px;
    margin-bottom: 20px;
}

#word-options button {
    background-color: #cccccc;
    margin: 5px;
    padding: 10px 20px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
}

.result-popup {
    background-color: #333;
    color: white;
    padding: 20px;
    position: fixed;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -30%);
    border-radius: 10px;
    box-shadow: 0 0 10px white;
}
