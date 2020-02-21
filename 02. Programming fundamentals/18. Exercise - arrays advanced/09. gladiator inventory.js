function gladiatorInventory(input) {
    let inventory = input.shift().split(' ');

    for (let i = 0; i < input.length; i++) {
        let command = input[i].split(' ');
        let searchedItemIndex = inventory.indexOf(command[1]);

        if (command[0] === 'Buy') {
            // buying equipment, adding it only if not present, check by indexOf
            if (searchedItemIndex === -1) {
                inventory.push(command[1]);
            }
        } else if (command[0] === 'Trash') {
            // delete the equipment if it exist
            if (searchedItemIndex > -1) {
                inventory.splice(searchedItemIndex, 1);
            }
        } else if (command[0] === 'Repair') {
            // repairing the requested equipment if it exists and place it on last position
            if (searchedItemIndex > -1) {
                let repairedItem = inventory.splice(searchedItemIndex, 1);
                inventory.push(repairedItem[0]);
            }
        } else if (command[0] === 'Upgrade') {
            // if equipment exists "upgrade" it by pushing the item name and type of improvement right next to the same element
            let equipAndUpgrade = command[1].split('-');
            let searchedItemForUpgradeIndex = inventory.indexOf(equipAndUpgrade[0]);
            if (searchedItemForUpgradeIndex > -1) {
                inventory.splice(searchedItemForUpgradeIndex + 1, 0, `${equipAndUpgrade[0]}:${equipAndUpgrade[1]}`);
            }
        }
    }
    console.log(inventory.join(' '));
}

gladiatorInventory(['SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel']);

gladiatorInventory(['SWORD Shield Spear',
    'Trash Bow',
    'Repair Shield',
    'Upgrade Helmet-V']);