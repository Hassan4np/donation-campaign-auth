import swal from 'sweetalert';
const GetLocalStrageData = () => {
    const itemdata = localStorage.getItem('card');
    if (itemdata) {
        return JSON.parse(itemdata);
    }
    return [];
}


const SaveLocatStrageData = (id) => {
    const itemid = GetLocalStrageData();
    const dublicketid = itemid.find(itemid => itemid === id);
    if (!dublicketid) {
        itemid.push(id);
        localStorage.setItem('card', JSON.stringify(itemid))
        return swal("Good job!", "You Item is add", "success");
    } else {
        return swal("Sorry.. This item is Allready addedd");
    }
}

export { GetLocalStrageData, SaveLocatStrageData }