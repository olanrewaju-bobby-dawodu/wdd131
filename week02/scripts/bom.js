const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul');

function addRemoveChapter() {
    if (input.value.trim() !== '') {
        const li = input.value;
        input.value = '';

        const chapItem = document.createElement('li');
        const chapText = document.createElement('span');
        const deleteButton = document.createElement('button');

        chapItem.append(chapText);
        chapText.textContent = li;
        chapItem.append(deleteButton);
        deleteButton.textContent = '❌';
        list.append(chapItem);

        deleteButton.addEventListener('click', () => {
            list.removeChild(chapItem);
        })

        input.focus();

    }
}


button.addEventListener('click', addRemoveChapter);