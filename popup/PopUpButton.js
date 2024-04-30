(function() {
    var button = document.getElementById('button');

    button.addEventListener('click', function() {
        button.classList.add('onclic');

        setTimeout(function() {
            button.classList.remove('onclic');
            button.classList.add('validate');

            setTimeout(function() {
                button.classList.remove('validate');
                setTimeout(function() {
                    browser.tabs.query({})
                        .then((tabs) => {
                            tabs.forEach((tab) => {
                                browser.tabs.reload(tab.id);
                            });
                        })
                        .catch((error) => {
                            console.error("Error:", error);
                        });
                }, 900);
            }, 800);
        }, 700);
    });
})();

//я заебался делать эту блядскую кнопку