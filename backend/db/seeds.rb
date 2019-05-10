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
UserGender.destroy_all
UserOrientation.destroy_all
Relationship.destroy_all
Gender.destroy_all
Orientation.destroy_all
UserCharacter.destroy_all
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
    img: 'https://lh3.googleusercontent.com/046O91KAsqOm0pZv0sAQBLGysRsJ-ptlKFtKtx3C_SduA87kEcbgNjL645CeCUfzTOpcnjnsUMQeCioQ3k7JJLuNYchrdPAnK6k66PJhUmDhaH7Xf3gzm5_d5l8OUX6zmcMRRYKIk9T2Wm8wY0Yahb-vMRMhg8_pkDB0l-q26hl5ZF2WKn3mZcnuqlaJjLquZTd-yeyHXELAwdZ3acRThlxzTLLhJwiP39ckKtC9Q70iFww_gcTMogIfGAC1fwXyoEIkf4FaY-lKeAQEO6gaJlSBxtfy-UjhRjsQrewMeE9e9vmtEjDGUnvvzflIOtnJ6FPrButs6FXuuPVD8CAPR0P7NrjH_L9lGkEyYecYHYURucxw3De3y93UMOsI9YJ6y68szNz5zwkB8F_aVl57fre1Ye6SIAoc6CfvS7AK2BJ3SGyfXgxtATFcp5oYpNbxR-sVBYXXmhpavLmn4uEkDbFtXpcofnYSX8gsANJNoAuG8gaPfl1ZPC1XPUS58fC-pqW2vQHFCH258IuX_duclr6-d5ArcIPHZPrdKwVHEyKRRqE9iZ_uWVdaxN6E-TAL3co40OQH2USXmBt1Gqyy_JHy_ZQi9Hmu7lbG86i68xsL-NCpVqOzebu2hp-0C4TqhgRucNnMcA4ccsFu8MSA4M_px1U_bxQ=s201-no',
    bio: Faker::Movies::PrincessBride.quote
)
cleric = Character.create(
    name: Faker::Games::ElderScrolls.unique.name,
    race: 'Human',
    character_class: 'Cleric',
    img: 'https://lh3.googleusercontent.com/J31jLl-gGT1LmvD4YSRWVV_-YUN_EAFL-D2Jq9K-twmFlst2f4nWWUknIjjzjxNClIyCkUdpKc3QGWR4yDR00m-NHLNOcDR-EQFk0gDp5dHah-Dzs-kwgwHf6jZs3f2z89sB2t74DF7bIAB9U0pDDghslmgI0Ny2eazzZM6W6c-nfhcZEIVbMRlkU4LBRoKb_zZKEb06NAs0_9tods8LX7CYOOnf0vp0TMWMlbZe-lDOX_bpBJ84sCAW0Y2Blv3qgmUkaC3Dr3JSlzoEVP0o7uZU1kofIqGSmvzBmip2aUQYP_mMqhmoojpv5oJUyUeQzWMT25Q7uAKS_Ksz0DPXGqBR7loqQiTDI8RQ-0PG4NX2kPj3sa_QOYBX32xLSsybAe1x4cittseuw_UjAuJ47MXhDFa722vBlEmb9KsX6UO0SLg4jYlZO06EIGcl29OTm9jfT7pgL5onJ0M65LXpD-61GPemnaKtMGQYRFd3JBtyLfFRQpMsMrVlJ0qVO1HInbe7TbwiFZKZhuJCwN2_Peym6tZHkuFRYrHvFODAV2byjTYDzdDroQJQG-5zF6n4pXZ_O2128xS2Qo7bHw2mWYvrcigBnHg7ZB7aRWK37NqoFauPdGvj1b8ZUUkbOQX3pcix14KZgsB6T1rkTCv6PnrUcKBNd8s=s201-no',
    bio: Faker::Movies::PrincessBride.quote
)
wizard = Character.create(
    name: Faker::Games::ElderScrolls.unique.name,
    race: 'Elf',
    character_class: 'Wizard',
    img: 'https://lh3.googleusercontent.com/qDUfZO-6v7Mn7lSIdYMXcmtB04HpIVMPxWhkCxKCmNTo91QbfscTqS2SMR9S21-hL-Gc5PJKdbLyvtlZYpFxHxidR0tVymhrE4lQ3_HQALwJPqOlo7CxX9CxkYVGQ-BWfvyCH7Q68Fn7ykArAPqy5G0VUxZvKsRixJ98COEMGNhfZGr5fD73vO_OwJEdIjQ8yBXVJEphJHl3fv3H0RV-1tSyqaq-LG2tpD37-goQNqAQWH0hVxry8LOC3h7Y0IWsmfTxARZRsz1bH8hx753G6cxDym4ODHrin6EqcEaumUwCQ7HEPgcuyDY0_EEPJnN9YTYS723KcJTJep1nXiiuKiui9FncgpR_fn43uhNY7T1Sq8Vm93WmLjqeywVfjobC4ri0w6ygqyEkXOVsf3D6zwRh5pMbdJLQ3HlkEB671-3V9Hvy_yIPV6dvFV6AcsrGrTPHX11xwwmgfYr1eV7WuFFvFvzSLDA2Qq8XspP3YnKKllzeKQLBxdVEHCeikfBk3Pt-79QHvGZ-HavDKoQ44Bmgp89Y5cUzu9gQUMwnT055MaAGAeNAR22KVQJSDnN5tRdGgbf3nYmqEy3uICQ5fVEJZ8VzKanneCuWr3g72UIBe5kwT4hSnvGZpv2gw27Ct9JZ4Rb5H6gDGSg-9R3gGwTGBFtE47w=s220-no',
    bio: Faker::Movies::PrincessBride.quote
)
bard = Character.create(
    name: Faker::Games::ElderScrolls.unique.name,
    race: 'Halfling',
    character_class: 'Bard',
    img: 'https://lh3.googleusercontent.com/j-sy4BGHQWmy645dijqp5M4bu04TZIgY4SgG1axlcC6zqssTXD8BziqkN8g5aCjJx-zJREEbwUrR84zIJJIBUaR4v5cDfmX4-lh9RQ0QzcUV1aDpo9mQGE9hXyxdHY7Amvja2FBjJLBrFiKObjwz0SKLNTe90ZLB8WmavH1I0M-5utvAsxgOtME2vvKf0GRCBkVi6KdbBIvuNzLCmazhSN6GcGn4kbkAYYVXR3O6FqtjnI6h7bNaJXPBulUfwbJO8k5IleYH_quAKS78b0AZcikWl1F8yxfHPloruP1ln4IvO3EC77CRPga6tQqB80e28c4tGleAUV5xbZ7kozNkek6YxTmUIws5OO9hZw4HkYVAADCBpOYytHxdU-CKq9rTd6HJ7jKld5vzZDDfql43Eoz04Gs1jT001laibAV2ghAJFKXTMWadCFatTbDmPNVaR8uCmUz9LgzWk4Dc00pvOh_5y-zlsbdOVwO0krKpKBNBEHfzwN6AUZQYmzjgyiMfXuSYRrCH8dNqxX4kQVXCj-8x1ryVQJF_3nLmbzaItXrR6CAr1OB6JKb8Fmw3QzqCInRneS8LH3Jh2CyFojpBz-aTn47N1_uPUnRN3sNVCT4VPUgg4gaS6a_3tAG-Fz0cet-fQcsdU5CaPs6G4xzKlpXV5UWszeI=w200-h201-no',
    bio: Faker::Movies::PrincessBride.quote
)
barbarian = Character.create(
    name: Faker::Games::ElderScrolls.unique.name,
    race: 'Half-Orc',
    character_class: 'Barbarian',
    img: 'https://lh3.googleusercontent.com/Vd24EJwSQ41ZUC-_w8R84T6rq1vIZ7jhggCHM_GBkeVX_rNwQhqO-xGvzvEUaIIX21QtOhMAlnC9LAPjftXdu-omhHAhkizt0J_6qzOIIsH9JLAyPHUFElEAN0Xe0CK6AauvV4v6oBW87U-g-RMuW4GANWYnOzYLoE6eJnh5pRFZz8Y6cJaN28c-1DRu1b8rNwjuoJumqA1V8nol14s5Ycy7rXovO4jUESC120z4OLFjGit5vhz6tE8Z2JB4zk3hUype3yGGIbtFYiP-RJ6Mco1aIUUCyKvvKI0dQhHyF8ug4g6KDNuNbU7EsOX_w4EdAQJMCARXzeqOKLXsQgluF05QP4gNUCY_6-6w8zYENSiMg-ebt9lu-PlRhoUdIcQ5jeYzQ_uz3O2NGRoMmkwfCctE6n9tJ5dXsz13817xI8WhkAJVQxvRT8VU9OBYmcVoFzwFG4xnmCGYecmGIBhc-fi_ozvxNa7AeCiqyL2yblwmYdCHOUv-Lx4oPyl1FqKVFMZisbeL6xK0AzzcpuOpz1gWByX6Anq67UvlNB2U-aOH1rA7Wu3VGH3MmaaEmQZfvmwZy2kbq98vu0A-cfKKCEB9GzNQAR4RVRAiz0LPTps_FZ3j0QjaVVufqph1I2iMmeTNFwdqK84NnrTTrL9cn-_vmy_Z-Yg=s201-no',
    bio: Faker::Movies::PrincessBride.quote
)

CharacterGender.create(gender_id: trans_femme.id, character_id: bard.id)
CharacterGender.create(gender_id: two_spirit.id, character_id: barbarian.id)
CharacterGender.create(gender_id: demi_girl.id, character_id: cleric.id)
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

30.times do 
    DateEvent.create(title: Faker::Book.title , situation: Faker::Movies::HarryPotter.quote, challenge_rating: rand(5-20)) 
end
