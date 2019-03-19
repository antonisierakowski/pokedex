# Pokédex

## Introduction

In the Pokémon franchise, the Pokédex is a digital encyclopedia giving information about all Pokémon that are contained in its database. It's an invaluable tool to all trainers in the Pokémon world.<br />
I made this app to test my React skills, and it turned out pretty cool, so even though it's fully functional and considered finished, I still plan on implementing more features in the future (list of those below). Also, let's not forget - creating this app was made possible by PokéAPI (https://pokeapi.co/ - thanks for that!). <br />
You can run the app at https://antonisierakowski.github.io/pokedex

## How to Use

### Start
When you open the app, you're presented with minimalistic UI centering around the text input field and two buttons. The main input lets you search for specific Pokémon by their name or ID, with the autocomplete tool helping you find the specific creature you're looking for. You can also use the right button labeled as 'find random' to, as the name suggests, find random Pokémon and immediately take you to a detailed view displaying info about it.

### Search results
If you enter only a few letters to the search field, the search engine will display any Pokémon whose name matches the given string, and if your search yields no results, you will be shown a corresponding message. If there is more than one result, you will be shown the sorting sections, which displays the number of results and lets you sort your them by Pokémon's name, ID number, or type. You can click any of the results to display Pokémon's detailed view.

### Detailed view
Detailed view is shown after you click any of the search results or use the 'find random' feature. It displays, among other info, selected Pokémon's name, ID number, types, in-game sprite, description and base stats. By clicking the arrows around Pokémon's sprite, you can switch to the Pokémon of neighboring ID number. If you want to leave the detailed view, just click anywhere outside. If you're on mobile, you can also tap the back arrow icon displayed in the top-right corner of this view.

## Future Plans 
* Evolution chains info with links to included Pokémon.
* Rework the 'sort by type' option.
* Playing back Pokémon's cry after clicking its sprite in detailed view.
* Option to mark any Pokémon as caught (still kept after reloading the page) with separate view displaying Pokémon marked as such.
