
Champion.destroy_all
ChampionRegion.destroy_all
CapstoneUser.destroy_all
ChampionComment.destroy_all
UserPost.destroy_all
PostComment.destroy_all

# example user
user = CapstoneUser.create(bio: "User's bio.", display_name: "userDisplay", username: "userUserName", password_digest: BCrypt::Password.create('userPassword'), profile_pic: 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/6/6d/Skin_Loading_Screen_Muay_Thai_Lee_Sin.jpg', email: "testemail2@gmail.com")
user2 = CapstoneUser.create(bio: "User2's bio.", display_name: "user2Display", username: "user2UserName", password_digest: BCrypt::Password.create('user2Password'), profile_pic: 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/2/24/Rengar_Splash_0_Old.jpg', email: "testemail@gmail.com")
# example user post
user_post = UserPost.create(capstone_user_id: user.id, content: "I dislike this character. I think the balance is terrible, and the entire champion design is based around doing all damage from one ability. I feel like her lore isn't unique, but I can excuse that. Playing against this character just feels terrible, I hope they remove this character some day.", title: "Zoe: My Least Favorite Character", img_url: "https://images.contentstack.io/v3/assets/blt187521ff0727be24/blta5516014683545a0/60ee1444a471a34acb2c2016/zoe-splash.jpg")
# post comment
post_comment = PostComment.create(content: "Completely agree.", capstone_user_id: user2.id, user_post_id: user_post.id)
# champion region
runeterra = ChampionRegion.create(name: 'Runeterra', description: 'Composed of both the material and spirit realms, Runeterra is all that separates the celestial powers of creation from the abyssal threat of all undoing. This is a magical world unlike any other--inhabited by peoples both fierce and wondrous.')
# champion
aatrox = Champion.create(name: 'Aatrox', champion_region_id: runeterra.id, splash_art: 'https://i.redd.it/raugkcc41ry91.png', 
release_date: '2013-06-13', lore: 'Once honored defenders of Shurima against the Void, Aatrox and his brethren would eventually become an even greater threat to Runeterra, and were defeated only by cunning mortal sorcery. But after centuries of imprisonment, Aatrox was the first to find freedom once more, corrupting and transforming those foolish enough to try and wield the magical weapon that contained his essence. Now, with stolen flesh, he walks Runeterra in a brutal approximation of his previous form, seeking an apocalyptic and long overdue vengeance.')
# example champion comment
comment = ChampionComment.create(capstone_user_id: user.id, champion_id: aatrox.id, content: "Very interesting, cool design, not sure about the execution.")

bandle_city = ChampionRegion.create(name: 'Bandle City', description: 'Opinions differ as to where exactly the home of the yordles is to be found, though a handful of mortals claim to have traveled unseen pathways to a land of curious enchantment beyond the material realm. They tell of a place of unfettered magic, where the foolhardy can be led astray by myriad wonders, and end up lost in a dream...
In Bandle City, it is said that every sensation is heightened for non-yordles. Colors are brighter. Food and drink intoxicates the senses for years and, once tasted, will never be forgotten. The sunlight is eternally golden, the waters crystal clear, and every harvest brings a fruitful bounty. Perhaps some of these claims are true, or maybe none—for no two taletellers ever seem to agree on what they actually saw. Only one thing is known for certain, and that is the timeless quality of Bandle City and its inhabitants. This might explain why those mortals who find their way back often appear to have aged tremendously, while many more never return at all.')

bildgewater = ChampionRegion.create(name: 'Bildgewater', description: 'Nestled away in the Blue Flame Isles archipelago, Bilgewater is a port city like no other—home to serpent hunters, dock gangs, and smugglers from across the known world. Here, fortunes are made and ambitions shattered in the blink of an eye. For those fleeing justice, debt, or persecution, Bilgewater can be a place of new beginnings, for no one on these twisted streets cares about your past. Even so, with each new dawn, careless travelers can always be found floating in the harbor, their purses empty and their throats slit… 
While incredibly dangerous, Bilgewater is ripe with opportunity, free from the shackles of formal government and trade regulation. If you have the coin, almost anything can be purchased here, from outlawed hextech to the favor of local crime lords. With the recent removal of the last “reaver king” of Bilgewater, the city has entered a period of transition, while the most prominent captains try to agree on its future. But as long as there are seaworthy ships and crews to sail them, Bilgewater is likely to remain one of the most colorful and well-connected places in Runeterra.')

demacia = ChampionRegion.create(name: 'Demacia', description: 'Astrong, lawful kingdom with a prestigious military history, Demacia’s people have always valued the ideals of justice, honor, and duty most highly, and are fiercely proud of their cultural heritage. But in spite of these lofty principles, this largely self-sufficient nation has grown more insular and isolationist in recent centuries. Now, Demacia is a kingdom in turmoil.
The capital, the Great City of Demacia, was founded as a refuge from sorcery after the nightmare of the Rune Wars, and built upon the riddle of petricite—a peculiar white stone that dampens magical energy. It is from here that the royal family has long seen to the defense of the outlying towns and villages, farmland, forests, and mountains rich with mineral resources.
However, following the sudden death of King Jarvan III, the other noble families have not yet approved the succession of his sole heir, young Prince Jarvan, to the throne.
Those who dwell beyond the heavily guarded borders are increasingly viewed with suspicion, and many former allies have begun to look elsewhere for protection, in these uncertain times. Some dare to whisper that the golden age of Demacia has passed, and unless its people are willing to adapt to a changing world—something many believe they are simply incapable of doing—the kingdom’s decline may be inevitable.
And all the petricite in the land will not protect Demacia from itself.')

ionia = ChampionRegion.create(name: 'Ionia', description: 'Surrounded by treacherous seas, Ionia is composed of a number of allied provinces scattered across a massive archipelago, known to many as the First Lands. Since Ionian culture has long been shaped by the pursuit of balance in all things, the border between the material and spirit realms tends to be more permeable here, especially in the wild forests and mountains.

Although these lands’ enchantments can be fickle, its creatures dangerous and fae, for many centuries most Ionians led lives of plenty. The warrior monasteries, provincial militias—and even Ionia itself—had been enough to protect them.
But that ended twelve years ago, when Noxus attacked the First Lands. The empire’s seemingly endless warhosts savaged Ionia, and were only defeated after many years, and at great cost.
Now, Ionia exists in an uneasy peace. Different reactions to the war have divided the region—some groups, such as the Shojin monks or the Kinkou, seek a return to isolationist pacifism, and pastoral traditions. Other more radical factions, such as the Navori Brotherhood and the Order of Shadow, demand a militarization of the land’s magic, to create a single, unified nation that can take vengeance on Noxus.
The fate of Ionia hangs in a delicate balance that few are willing to overturn, but all can feel shifting uneasily beneath their feet.')

ixtal = ChampionRegion.create(name: 'Ixtal', description: 'Renowned for its mastery of elemental magic, Ixtal was one of the first independent nations to join the Shuriman empire. In truth, Ixtali culture is much older—part of the great westward diaspora that gave rise to civilizations including the Buhru, magnificent Helia, and the ascetics of Targon—and it is likely they played a significant role in the creation of the first Ascended.
But the mages of Ixtal survived the Void, and later the Darkin, by distancing themselves from their neighbors, drawing the wilderness around them like a shield. While much had already been lost, they were committed to the preservation of what little remained…
Now, secluded deep in the jungle for thousands of years, the sophisticated arcology-city of Ixaocan remains mostly free of outside influence. Having witnessed from afar the ruination of the Blessed Isles and the Rune Wars that followed, the Ixtali view all the other factions of Runeterra as upstarts and pretenders, and use their powerful magic to keep any intruders at bay.')

noxus = ChampionRegion.create(name: 'Noxus', description: 'Divider Noxus is a powerful empire with a fearsome reputation. To those beyond its borders, it is brutal, expansionist, and threatening, yet those who look past its warlike exterior see an unusually inclusive society, where the strengths and talents of its people are respected and cultivated.
The Noxii were once fierce barbarian tribes, until they stormed the ancient city that now lies at the heart of their domain. Under threat from all sides, they aggressively took the fight to their enemies, pushing their borders outward with each passing year. This struggle for survival has made modern Noxians a deeply proud people who value strength above all—though that strength can manifest in many different forms.
Anyone can rise to a position of power and respect within Noxus if they display the necessary aptitude, regardless of social standing, background, homeland, or wealth. Those who are able to wield magic are held in particularly high esteem, and are actively sought out in order that their special talents may be honed and best harnessed for the benefit of the empire. But in spite of this meritocratic ideal, the old noble houses still wield considerable power… and some fear that the greatest threat to Noxus comes not from its enemies, but from within.')

piltover = ChampionRegion.create(name: 'Piltover', description: 'Piltover is a thriving, progressive city whose power and influence is on the rise. It is Valoran’s cultural center, where art, craftsmanship, trade and innovation walk hand in hand. Its power comes not through military might, but the engines of commerce and forward thinking. Situated on the cliffs above the district of Zaun and overlooking the ocean, fleets of ships pass through its titanic sea-gates, bringing goods from all over the world. The wealth this generates has given rise to an unprecedented boom in the city’s growth. Piltover has - and still is - reinventing itself as a city where fortunes can be made and dreams can be lived. Burgeoning merchant clans fund development in the most incredible endeavors: grand artistic follies, esoteric hextech research, and architectural monuments to their power. With ever more inventors delving into the emergent lore of hextech, Piltover has become a lodestone for the most skilled craftsmen the world over.')

shadow_isles = ChampionRegion.create(name: 'Shadow Isles', description: 'This cursed land was once home to a noble, enlightened civilization, known to its allies and emissaries as the Blessed Isles. However, more than a thousand years ago, an unprecedented magical cataclysm left the barrier between the material and spirit realms in tatters, effectively merging the two… and dooming all living things in an instant.
Now, a malevolent Black Mist permanently shrouds the Isles, and the earth itself is tainted by dark sorcery. Mortals who dare to venture to these dismal shores will slowly have their life force stolen away from them, which in turn attracts the insatiable, restless spirits of the dead.
Those who perish within the Mist are condemned to haunt this nightmarish place for eternity—worse still, the power of the Shadow Isles appears to wax stronger with every passing year, allowing the most powerful specters to roam farther and farther across Runeterra.')

shurima = ChampionRegion.create(name: 'Shurima', description: 'The empire of Shurima was once a thriving civilization that spanned an entire continent. Forged in a bygone age by the mighty god-warriors of the Ascended Host, it united all the disparate peoples of the south, and enforced a lasting peace between them. Few dared to rebel. Those that did, like the accursed nation of Icathia, were crushed without mercy.
However, after several thousand years of growth and prosperity, the failed Ascension of Shurima’s last emperor left the capital in ruins, and tales of the empire’s former glory became little more than myth. Now, most of the nomadic inhabitants of Shurima’s deserts eke out a meager existence from the unforgiving land. Some have built small outposts to defend the few oases, while others delve into long lost catacombs in search of the untold riches that must surely lay buried there. There are also those who live as mercenaries, taking coin for their service before disappearing back into the lawless wastelands.
Still, a handful dare to dream of a return to the old ways. Indeed, more recently the tribes have been stirred by whispers from the heart of the desert—that their emperor Azir has returned, to lead them into a new, wondrous age.')

targon = ChampionRegion.create(name: 'Targon', description: 'Mount Targon is the mightiest peak in Runeterra, a towering peak of sun-baked rock amid a range of summits unmatched in scale anywhere else in the world. Located far from civilization, Mount Targon is utterly remote and all but impossible to reach save by the most determined seeker. Many legends cling to Mount Targon, and, like any place of myth, it is a beacon to dreamers, madmen and questors of adventure. Some of these brave souls attempt to scale the impossible mountain, perhaps seeking wisdom or enlightenment, perhaps chasing glory or some soul-deep yearning to witness its summit. The ascent is all but impossible, and those hardy few who somehow survive to reach the top almost never speak of what they have seen. Some return with a haunted, empty look in their eyes, others changed beyond all recognition, imbued by an Aspect of unearthly, inhuman power with a destiny few mortals can comprehend.')

the_freljord = ChampionRegion.create(name: 'The Freljord', description: 'The Freljord is a harsh and unforgiving place—where the people are born warriors, who must persevere against all odds.
Proud and fiercely independent, the tribes of the Freljord are often considered wild, rugged, and “uncivilized” by their neighbors across Valoran, who do not know the ancient traditions that shaped them. Many thousands of years ago, the alliance between the sisters Avarosa, Serylda, and Lissandra was shattered in a war that unknowingly threatened all of Runeterra, plunging the northern lands into chaos, and near-constant winter. Now, only those truly exceptional mortals who seem immune to the ravages of fire or ice seem destined, or able, to lead.
Despite the best efforts of the Frostguard, myths and legends still endure of the old gods, the enigmatic yetis, and restless spirit walker shamans. The raiders of the Winter’s Claw range further with each passing year, harrying the borders of Demacia to the south, and the frontiers of Noxus to the east. Finally, seeking a more peaceful future, the fractious independent tribes and clans have begun to offer their allegiance to Ashe, young queen of the Avarosans.
Even so, the portents are grim. War is surely returning to the Freljord, and none can hope to escape it.')

the_void = ChampionRegion.create(name: 'The Void', description: 'Screaming into existence with the birth of the universe, the Void is a manifestation of the unknowable nothingness that lies beyond. It is a force of insatiable hunger, waiting through the eons until its masters, the mysterious Watchers, mark the final time of undoing.
To be a mortal touched by this power is to suffer an agonizing glimpse of eternal unreality, enough to shatter even the strongest mind. Denizens of the Void realm itself are construct-creatures, often of only limited sentience, but tasked with a singular purpose—to usher in total oblivion across Runeterra.')

zaun = ChampionRegion.create(name: 'Zaun', description: 'Zaun is a large, undercity district, lying in the deep canyons and valleys threading Piltover. What light reaches below is filtered through fumes leaking from the tangles of corroded pipework and reflected from the stained glass of its industrial architecture. Zaun and Piltover were once united, but are now separate, yet symbiotic societies. Though it exists in perpetual smogged twilight, Zaun thrives, its people vibrant and its culture rich. Piltover’s wealth has allowed Zaun to develop in tandem; a dark mirror of the city above. Many of the goods coming to Piltover find their way into Zaun’s black markets, and hextech inventors who find the restrictions placed upon them in the city above too restrictive often find their dangerous researches welcomed in Zaun. Unfettered development of volatile technologies and reckless industry has rendered whole swathes of Zaun polluted and dangerous. Streams of toxic runoff stagnate in the city’s lower reaches, but even here people find a way to exist and prosper.')




jax = Champion.create(name: 'Jax', champion_region_id: runeterra.id, splash_art: 'https://raw.communitydragon.org/pbe/plugins/rcp-be-lol-game-data/global/default/v1/champion-splashes/uncentered/24/24000.jpg', 
release_date: '2009-02-21', lore: 'Runeterras greatest weapons master, Jax is the only survivor of the Kohari—champions sworn to the defense of Icathia. But when the Void was unleashed against the Shuriman empire’s Ascended Host, Icathia was destroyed, leaving Jax without a home or purpose. He gathered the “last light of Icathia”, a symbol of his hope to one day defeat the Void, and now travels the world, searching for warriors strong enough to face the coming darkness by his side.')

kindred = Champion.create(name: 'Kindred', champion_region_id: runeterra.id, splash_art: 'https://raw.communitydragon.org/pbe/plugins/rcp-be-lol-game-data/global/default/v1/champion-splashes/uncentered/203/203000.jpg',
release_date: '2015-10-14', lore: 'Separate, but never parted, Kindred represents the twin essences of death. Lambs bow offers a swift release from the mortal realm for those who accept their fate. Wolf hunts down those who run from their end, delivering violent finality within his crushing jaws. Though interpretations of Kindred’s nature vary across Runeterra, every mortal must choose the true face of their death.')

ahri = Champion.create(name: 'Ahri', champion_region_id: ionia.id, splash_art: 'https://images.contentstack.io/v3/assets/blt187521ff0727be24/bltda668b66206f7f9e/60ee0b41cdb93c284ee3e936/Ahri_0.jpg', 
release_date: '2011-12-14', lore: "Innately connected to the magic of the spirit realm, Ahri is a fox-like vastaya who can manipulate her prey's emotions and consume their essence—receiving flashes of their memory and insight from each soul she consumes. Once a powerful yet wayward predator, Ahri is now traveling the world in search of remnants of her ancestors while also trying to replace her stolen memories with ones of her own making.")

akali = Champion.create(name: 'Akali', champion_region_id: ionia.id, splash_art: 'https://images.contentstack.io/v3/assets/blt187521ff0727be24/bltadda3687d160dca6/60ee0b4666d52e63b8eb6b2f/Classic_Akali_Splash.jpg', 
release_date: '2010-05-11', lore: "Abandoning the Kinkou Order and her title of the Fist of Shadow, Akali now strikes alone, ready to be the deadly weapon her people need. Though she holds onto all she learned from her master Shen, she has pledged to defend Ionia from its enemies, one kill at a time. Akali may strike in silence, but her message will be heard loud and clear: fear the assassin with no master.")

akshan = Champion.create(name: 'Akshan', champion_region_id: shurima.id, splash_art: 'https://images.contentstack.io/v3/assets/blt187521ff0727be24/blt5e69e0645890bf95/60ee0b48aa56744b33ce03ab/akshan-splash.jpg', 
release_date: '2021-07-22', lore: "Raising an eyebrow in the face of danger, Akshan fights evil with dashing charisma, righteous vengeance, and a conspicuous lack of shirts. He is highly skilled in the art of stealth combat, able to evade the eyes of his enemies and reappear when they least expect him. With a keen sense of justice and a legendary death-reversing weapon, he rights the wrongs of Runeterra’s many scoundrels while living by his own moral code: “Don’t be an ass.”")

alistar = Champion.create(name: 'Alistar', champion_region_id: runeterra.id, splash_art: 'https://images.contentstack.io/v3/assets/blt187521ff0727be24/blte97d21767bea1e6b/60ee0b4b1f6a8d297d1d2113/Alistar_0.jpg', 
release_date: '2009-02-21', lore: "Always a mighty warrior with a fearsome reputation, Alistar seeks revenge for the death of his clan at the hands of the Noxian empire. Though he was enslaved and forced into the life of a gladiator, his unbreakable will was what kept him from truly becoming a beast. Now, free of the chains of his former masters, he fights in the name of the downtrodden and the disadvantaged, his rage as much a weapon as his horns, hooves and fists.")

amumu = Champion.create(name: 'Amumu', champion_region_id: shurima.id, splash_art: 'https://images.contentstack.io/v3/assets/blt187521ff0727be24/blt0d26d3c893fe7d48/60ee0b5085b0422843961375/Amumu_0.jpg', 
release_date: '2009-06-26', lore: "Legend claims that Amumu is a lonely and melancholy soul from ancient Shurima, roaming the world in search of a friend. Doomed by an ancient curse to remain alone forever, his touch is death, his affection ruin. Those who claim to have seen him describe a living cadaver, small in stature and wrapped in creeping bandages. Amumu has inspired myths, songs, and folklore told and retold for generations—such that it is impossible to separate truth from fiction.")

anivia = Champion.create(name: 'Anivia', champion_region_id: the_freljord.id, splash_art: 'https://images.contentstack.io/v3/assets/blt187521ff0727be24/blt564c38e619cc505c/60ee0b53d42632662baee2bf/Anivia_0.jpg', 
release_date: '2009-07-10', lore: "Anivia is a benevolent winged spirit who endures endless cycles of life, death, and rebirth to protect the Freljord. A demi-god born of unforgiving ice and bitter winds, she wields those elemental powers to thwart any who dare disturb her homeland. Anivia guides and protects the tribes of the harsh north, who revere her as a symbol of hope, and a portent of great change. She fights with every ounce of her being, knowing that through her sacrifice, her memory will endure, and she will be reborn into a new tomorrow.")

annie = Champion.create(name: 'Annie', champion_region_id: runeterra.id, splash_art: 'https://images.contentstack.io/v3/assets/blt187521ff0727be24/blt82bcfb363404fdb5/60ee0b65496a232835c1ff45/Annie_0.jpg', 
release_date: '2009-02-21', lore: "Dangerous, yet disarmingly precocious, Annie is a child mage with immense pyromantic power. Even in the shadows of the mountains north of Noxus, she is a magical outlier. Her natural affinity for fire manifested early in life through unpredictable, emotional outbursts, though she eventually learned to control these “playful tricks.” Her favorite includes the summoning of her beloved teddy bear, Tibbers, as a fiery protector. Lost in the perpetual innocence of childhood, Annie wanders the dark forests, always looking for someone to play with.")

aphelios = Champion.create(name: 'Aphelios', champion_region_id: targon.id, splash_art: 'https://images.contentstack.io/v3/assets/blt187521ff0727be24/blt5b04d0076299c48f/60ee0b6960216d1db87a11cd/aphelios-splash.jpg', 
release_date: '2019-12-11', lore: "Emerging from moonlight’s shadow with weapons drawn, Aphelios kills the enemies of his faith in brooding silence—speaking only through the certainty of his aim, and the firing of each gun. Though fueled by a poison that renders him mute, he is guided by his sister Alune in her distant temple sanctuary from where she pushes an arsenal of moonstone weapons into his hands. For as long as the moon shines overhead, Aphelios will never be alone.")

ashe = Champion.create(name: 'Ashe', champion_region_id: the_freljord.id, splash_art: 'https://images.contentstack.io/v3/assets/blt187521ff0727be24/blt5388dc09a75213a1/60ee0b7912cadb2032d63aa7/Classic_Ashe_Splash.jpg', 
release_date: '2009-02-21', lore: "Iceborn warmother of the Avarosan tribe, Ashe commands the most populous horde in the north. Stoic, intelligent, and idealistic, yet uncomfortable with her role as leader, she taps into the ancestral magics of her lineage to wield a bow of True Ice. With her people’s belief that she is the mythological hero Avarosa reincarnated, Ashe hopes to unify the Freljord once more by retaking their ancient, tribal lands.")

aurelion_sol = Champion.create(name: 'Aurelion Sol', champion_region_id: runeterra.id, splash_art: 'https://images.contentstack.io/v3/assets/blt187521ff0727be24/bltac9e6a0df59a974e/60ee0b8743739d6620a572d8/AurelionSol_0.jpg', 
release_date: '2016-03-24', lore: "Aurelion Sol once graced the vast emptiness of the celestial realm with wonders of his own devising, but was tricked by the Aspects of Targon into revealing the secrets of a sun that he himself created. His awesome power was channeled into immortal god-warriors to protect the apparently insignificant world of Runeterra—now, desiring a return to his mastery of the cosmos, Aurelion Sol will drag the very stars from the sky, if he must, in order to regain his freedom.")

azir = Champion.create(name: 'Azir', champion_region_id: shurima.id, splash_art: 'https://images.contentstack.io/v3/assets/blt187521ff0727be24/blt9035b786fd86e68d/60ee0b8d927567256a375e26/Azir_0.jpg', 
release_date: '2014-09-16', lore: "Azir was a mortal emperor of Shurima in a far distant age, a proud man who stood at the cusp of immortality. His hubris saw him betrayed and murdered at the moment of his greatest triumph, but now, millennia later, he has been reborn as an Ascended being of immense power. With his buried city risen from the sand, Azir seeks to restore Shurima to its former glory.")

bard = Champion.create(name: 'bard', champion_region_id: runeterra.id, splash_art: 'https://images.contentstack.io/v3/assets/blt187521ff0727be24/blt6730694cadd3ce90/60ee0ba4aa9be3239e98d8e4/Bard_0.jpg', 
release_date: '2015-03-12', lore: "A traveler from beyond the stars, Bard is an agent of serendipity who strives to maintain the harmony between creation, and the cold indifference of what lies beyond it. Many Runeterrans sing songs that ponder his extraordinary nature, yet they all agree that the cosmic vagabond is drawn to artifacts of great magical power. Surrounded by a jubilant choir of helpful meeps, it is impossible to mistake his actions as malevolent, as Bard always serves the greater good… in his own odd way.")

belveth = Champion.create(name: 'Bel’Veth', champion_region_id: the_void.id, splash_art: 'https://images.contentstack.io/v3/assets/blt187521ff0727be24/blt318127f5a8847c16/62855e95ead0d2559909b064/belveth-splash.jpg', 
release_date: '2022-06-09', lore: "A nightmarish empress created from the raw material of an entire devoured city, Bel’Veth is the end of Runeterra itself... and the beginning of a monstrous reality of her own design. Driven by epochs of repurposed history, knowledge, and memories from the world above, she voraciously feeds an ever-expanding need for new experiences and emotions, consuming all that crosses her path. Yet her wants could never be sated by only one world as she turns her hungry eyes toward the Void’s old masters...")

blitzcrank = Champion.create(name: 'Blitzcrank', champion_region_id: zaun.id, splash_art: 'https://images.contentstack.io/v3/assets/blt187521ff0727be24/blt1487c53fac3d6842/60ee0be35397524ead3890bd/Blitzcrank_0.jpg', 
release_date: '2009-09-02', lore: "A behemoth of burnished metal, steam, and crackling electricity, Blitzcrank walks the streets of Zaun in a tireless effort to improve the undercity and give aid to those in need. Created to descend into the most caustic and dangerous of environments in Zaun to dispose of harmful waste, they have evolved beyond the bounds of their original programming, thanks to the genius of their inventor, and the mysterious power of hextech.")

brand = Champion.create(name: 'Brand', champion_region_id: runeterra.id, splash_art: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Brand_0.jpg', 
release_date: '2011-04-12', lore: "Once a tribesman of the icy Freljord named Kegan Rodhe, the creature known as Brand is a lesson in the temptation of greater power. Seeking one of the legendary World Runes, Kegan betrayed his companions and seized it for himself—and, in an instant, the man was no more. His soul burned away, his body a vessel of living flame, Brand now roams Valoran in search of other Runes, swearing revenge for wrongs he could not have suffered in a dozen mortal lifetimes.")

braum = Champion.create(name: 'Braum', champion_region_id: the_freljord.id, splash_art: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Braum_0.jpg', 
release_date: '2014-05-12', lore: "Blessed with massive biceps and an even bigger heart, Braum is a beloved hero of the Freljord. Every mead hall north of Frostheld toasts his legendary strength, said to have felled a forest of oaks in a single night, and punched an entire mountain into rubble. Bearing an enchanted vault door as his shield, Braum roams the frozen north sporting a mustachioed smile as big as his muscles—a true friend to all those in need.")

briar = Champion.create(name: 'Briar', champion_region_id: noxus.id, splash_art: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Briar_0.jpg', 
release_date: '2023-09-14', lore: "A failed experiment by the Black Rose, Briar’s uncontrollable bloodlust required a special pillory to focus her frenzied mind. After years of confinement, this living weapon broke free from her restraints and unleashed herself into the world. Now she’s controlled by no one—following only her hunger for knowledge and blood—and relishes the opportunities to let loose, even if reining back the frenzy isn’t easy.")

caitlyn = Champion.create(name: 'Caitlyn', champion_region_id: piltover.id, splash_art: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_0.jpg', 
release_date: '2011-01-04', lore: "Renowned as its finest peacekeeper, Caitlyn is also Piltover's best shot at ridding the city of its elusive criminal elements. She is often paired with Vi, acting as a cool counterpoint to her partner's more impetuous nature. Even though she carries a one-of-a-kind hextech rifle, Caitlyn's most powerful weapon is her superior intellect, allowing her to lay elaborate traps for any lawbreakers foolish enough to operate in the City of Progress.")

camille = Champion.create(name: 'Camille', champion_region_id: piltover.id, splash_art: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Camille_0.jpg', 
release_date: '2016-12-07', lore: "Weaponized to operate outside the boundaries of the law, Camille is the Principal Intelligencer of Clan Ferros—an elegant and elite agent who ensures the Piltover machine and its Zaunite underbelly runs smoothly. Adaptable and precise, she views sloppy technique as an embarrassment that must be put to order. With a mind as sharp as the blades she bears, Camille's pursuit of superiority through hextech body augmentation has left many to wonder if she is now more machine than woman.")

cassiopeia = Champion.create(name: 'Cassiopeia', champion_region_id: shurima.id, splash_art: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Cassiopeia_0.jpg', 
release_date: '2010-12-14', lore: "Cassiopeia is a deadly creature bent on manipulating others to her sinister will. Youngest and most beautiful daughter of the noble Du Couteau family of Noxus, she ventured deep into the crypts beneath Shurima in search of ancient power. There, she was bitten by a gruesome tomb guardian, whose venom transformed her into a viper-like predator. Cunning and agile, Cassiopeia now slithers under the veil of night, petrifying her enemies with her baleful gaze.")
