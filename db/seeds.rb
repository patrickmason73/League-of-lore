# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

runeterra = ChampionRegion.create(name: 'RuneTerra', description: 'Composed of both the material and spirit realms, Runeterra is all that separates the celestial powers of creation from the abyssal threat of all undoing. This is a magical world unlike any other--inhabited by peoples both fierce and wondrous.')

aatrox = Champion.create(name: 'Aatrox', champion_region_id: runeterra.id, splash_art: 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/c/ce/Skin_Splash_Classic_Aatrox.jpg/revision/latest?cb=20180613014549', 
release_date: '2013-06-13', lore: 'Once honored defenders of Shurima against the Void, Aatrox and his brethren would eventually become an even greater threat to Runeterra, and were defeated only by cunning mortal sorcery. But after centuries of imprisonment, Aatrox was the first to find freedom once more, corrupting and transforming those foolish enough to try and wield the magical weapon that contained his essence. Now, with stolen flesh, he walks Runeterra in a brutal approximation of his previous form, seeking an apocalyptic and long overdue vengeance.')

jax = Champion.create(name: 'Jax', champion_region_id: runeterra.id, splash_art: 'https://static.wikia.nocookie.net/leagueoflegends/images/2/2d/Jax_OriginalSkin.jpg/revision/latest?cb=20230926205445', 
release_date: '2009-02-21', lore: 'Runeterras greatest weapons master, Jax is the only survivor of the Kohari—champions sworn to the defense of Icathia. But when the Void was unleashed against the Shuriman empire’s Ascended Host, Icathia was destroyed, leaving Jax without a home or purpose. He gathered the “last light of Icathia”, a symbol of his hope to one day defeat the Void, and now travels the world, searching for warriors strong enough to face the coming darkness by his side.')

kindred = Champion.create(name: 'Kindred', champion_region_id: runeterra.id, splash_art: 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/f/fc/Skin_Splash_Classic_Kindred.jpg/revision/latest?cb=20191212173349',
release_date: '2015-10-14', lore: 'Separate, but never parted, Kindred represents the twin essences of death. Lambs bow offers a swift release from the mortal realm for those who accept their fate. Wolf hunts down those who run from their end, delivering violent finality within his crushing jaws. Though interpretations of Kindred’s nature vary across Runeterra, every mortal must choose the true face of their death.')

Ability.create(name: 'Mark Of The Kindred', description: 'Kindred can mark targets to Hunt. Successfully completing a Hunt permanently empowers Kindreds basic abilities. Every 4 hunts completed also increases Kindreds basic attack range.', icon: 'https://static.wikia.nocookie.net/leagueoflegends/images/3/38/Kindred_Mark_of_the_Kindred.png/revision/latest/thumbnail/width/360/height/360?cb=20170818190657', 
champion_id: kindred.id)