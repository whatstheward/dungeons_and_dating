# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

Gender.destroy_all
Orientation.destroy_all
Character.destroy_all

Gender.create(name:'male')
Gender.create(name:'trans-male')
Gender.create(name:'trans-masculine')
Gender.create(name:'female')
Gender.create(name:'trans-female')
Gender.create(name:'trans-feminine')
Gender.create(name:'non-binary')
Gender.create(name:'Genderfluid')
Gender.create(name:'Agender')
Gender.create(name:'Bigender')
Gender.create(name:'Polygender')
Gender.create(name:'Neutrois')
Gender.create(name:'Gender Apathetic')
Gender.create(name:'Androgyne')
Gender.create(name:'Intergender')
Gender.create(name:'Demi-boy')
Gender.create(name:'Demi-girl')
Gender.create(name:'Intersex')
Gender.create(name:'Greygender')
Gender.create(name:'Two-spirit')
Gender.create(name:'Novigender')

Orientation.create(name:'Heterosexual')
Orientation.create(name:'Homosexual')
Orientation.create(name:'Lesbian')
Orientation.create(name:'Gay')
Orientation.create(name:'Bisexual')
Orientation.create(name:'Pansexual')
Orientation.create(name:'Polysexual')
Orientation.create(name:'Androsexual')
Orientation.create(name:'Gynosexual')
Orientation.create(name:'Questioning')
Orientation.create(name:'Asexual')
Orientation.create(name:'Demisexual')
Orientation.create(name:'Queer')


Character.create(
    name: Faker::Games::ElderScrolls.unique.name,
    race: 'Dwarf',
    character_class: 'Fighter',
    img: 'https://dungeonsmaster.com/wp-content/uploads/2011/04/dwarf1.jpg',
    bio: Faker::Books::Lovecraft.paragraph
)
Character.create(
    name: Faker::Games::ElderScrolls.unique.name,
    race: 'Human',
    character_class: 'Cleric',
    img: 'https://vignette.wikia.nocookie.net/dd-the-soul-saga/images/2/2a/Blair_HD.jpg/revision/latest?cb=20160101172747',
    bio: Faker::Books::Lovecraft.paragraph
)
Character.create(
    name: Faker::Games::ElderScrolls.unique.name,
    race: 'Elf',
    character_class: 'Wizard',
    img: 'https://i.pinimg.com/originals/55/e0/40/55e0406c5885aa522c22d38677cf5056.png',
    bio: Faker::Books::Lovecraft.paragraph
)
Character.create(
    name: Faker::Games::ElderScrolls.unique.name,
    race: 'Gnome',
    character_class: 'Bard',
    img: 'https://i1.sndcdn.com/avatars-000094814001-y25sqe-t500x500.jpg',
    bio: Faker::Books::Lovecraft.paragraph
)
Character.create(
    name: Faker::Games::ElderScrolls.unique.name,
    race: 'Half-Orc',
    character_class: 'Barbarian',
    img: 'https://i.pinimg.com/originals/91/f6/7a/91f67a3184174eb4ffda6c381a9991b5.png',
    bio: Faker::Books::Lovecraft.paragraph
)
