# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

CharacterGender.destroy_all
CharacterOrientation.destroy_all
Gender.destroy_all
Orientation.destroy_all
Character.destroy_all

male = Gender.create(name:'male')
trans_male = Gender.create(name:'trans-male')
trans_masc = Gender.create(name:'trans-masculine')
female = Gender.create(name:'female')
trans_female = Gender.create(name:'trans-female')
trans_femme = Gender.create(name:'trans-feminine')
nb = Gender.create(name:'non-binary')
gender_fluid = Gender.create(name:'Genderfluid')
agender = Gender.create(name:'Agender')
bigender = Gender.create(name:'Bigender')
polygender = Gender.create(name:'Polygender')
neutrois = Gender.create(name:'Neutrois')
gender_apathetic = Gender.create(name:'Gender Apathetic')
androgyne = Gender.create(name:'Androgyne')
intergender = Gender.create(name:'Intergender')
demi_boy = Gender.create(name:'Demi-boy')
demi_girl = Gender.create(name:'Demi-girl')
intersex = Gender.create(name:'Intersex')
greygender = Gender.create(name:'Greygender')
two_spirit = Gender.create(name:'Two-spirit')
novigender = Gender.create(name:'Novigender')

het = Orientation.create(name:'Heterosexual')
homo =Orientation.create(name:'Homosexual')
lesbian =Orientation.create(name:'Lesbian')
gay = Orientation.create(name:'Gay')
bisexual = Orientation.create(name:'Bisexual')
pansexual = Orientation.create(name:'Pansexual')
polysexual = Orientation.create(name:'Polysexual')
androsexual = Orientation.create(name:'Androsexual')
gynosexual = Orientation.create(name:'Gynosexual')
questioning = Orientation.create(name:'Questioning')
asexual = Orientation.create(name:'Asexual')
demisexual = Orientation.create(name:'Demisexual')
queer = Orientation.create(name:'Queer')


fighter = Character.create(
    name: Faker::Games::ElderScrolls.unique.name,
    race: 'Dwarf',
    character_class: 'Fighter',
    img: 'https://dungeonsmaster.com/wp-content/uploads/2011/04/dwarf1.jpg',
    bio: Faker::Books::Lovecraft.paragraph
)
cleric = Character.create(
    name: Faker::Games::ElderScrolls.unique.name,
    race: 'Human',
    character_class: 'Cleric',
    img: 'https://vignette.wikia.nocookie.net/dd-the-soul-saga/images/2/2a/Blair_HD.jpg/revision/latest?cb=20160101172747',
    bio: Faker::Books::Lovecraft.paragraph
)
wizard = Character.create(
    name: Faker::Games::ElderScrolls.unique.name,
    race: 'Elf',
    character_class: 'Wizard',
    img: 'https://i.pinimg.com/originals/55/e0/40/55e0406c5885aa522c22d38677cf5056.png',
    bio: Faker::Books::Lovecraft.paragraph
)
bard = Character.create(
    name: Faker::Games::ElderScrolls.unique.name,
    race: 'Gnome',
    character_class: 'Bard',
    img: 'https://i1.sndcdn.com/avatars-000094814001-y25sqe-t500x500.jpg',
    bio: Faker::Books::Lovecraft.paragraph
)
barbarian = Character.create(
    name: Faker::Games::ElderScrolls.unique.name,
    race: 'Half-Orc',
    character_class: 'Barbarian',
    img: 'https://i.pinimg.com/originals/91/f6/7a/91f67a3184174eb4ffda6c381a9991b5.png',
    bio: Faker::Books::Lovecraft.paragraph
)

CharacterGender.create(gender_id: trans_femme.id, character_id: bard.id)
CharacterGender.create(gender_id: two_spirit.id, character_id: barbarian.id)
CharacterGender.create(gender_id: trans_male, character_id: cleric.id)
CharacterGender.create(gender_id: nb.id, character_id: bard.id)
CharacterGender.create(gender_id: intersex.id, character_id: barbarian.id)
CharacterGender.create(gender_id: female.id, character_id: wizard.id)
CharacterGender.create(gender_id: trans_male.id, character_id: fighter.id)
CharacterGender.create(gender_id: gender_fluid.id, character_id: fighter.id)

CharacterOrientation.create(orientation_id: homo.id, character_id: fighter.id)
CharacterOrientation.create(orientation_id: androsexual.id, character_id: fighter.id)
CharacterOrientation.create(orientation_id: lesbian.id, character_id: wizard.id )
CharacterOrientation.create(orientation_id: gynosexual.id, character_id: bard.id)
CharacterOrientation.create(orientation_id: pansexual.id, character_id: bard.id )
CharacterOrientation.create(orientation_id: asexual.id, character_id: cleric.id)
CharacterOrientation.create(orientation_id: queer.id, character_id: barbarian.id)
