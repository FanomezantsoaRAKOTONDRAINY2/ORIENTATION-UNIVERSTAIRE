let btn = document.querySelector('#btntext'),
    quest = document.querySelector('#quistion'),
    btn2 = document.querySelector('.btn2');
    page2 = document.querySelector('.Start')
    page3 = document.querySelector('.page-test')
btn2.onclick = function(){
    page2.style.display = 'none';
    page3.style.display = ('block')
}
    
const tambleau = ['Préférez-vous les matières liées aux langues et à la littérature ?',
'Êtes-vous à l\'aise avec la résolution de problèmes complexes ?',
 'Êtes-vous intéressé(e) par les métiers liés à l\'informatique et à la technologie ?',
 'Aimez-vous les activités artistiques et créatives ?',
'Êtes-vous attiré(e) par les domaines de la santé et des sciences de la vie ?',
'Êtes-vous intéressé(e) par l\'étude des cultures et des sociétés humaines ?',
'Aimez-vous les métiers liés à l\'environnement et à la durabilité ?',
'Êtes-vous à l\'aise avec les tâches d\'analyse et de gestion des données ?',
'Êtes-vous curieux(se) d\'en apprendre davantage sur les phénomènes économiques et financiers ?',
'Êtes-vous attiré(e) par les carrières dans le domaine de l\'éducation et de l\'enseignement ?',
'Aimez-vous les sujets liés à la psychologie et au comportement humain ?',
'Êtes-vous intéressé(e) par les études juridiques et le système judiciaire ?',
'Avez-vous un fort intérêt pour les domaines de la communication et des médias ?' ]

 let currentIndex = 0;

 btn.onclick = function(){
    quest.textContent = tambleau[currentIndex];
    currentIndex = (currentIndex + 1) %  tambleau.length;
    console.log(tambleau[currentIndex]);
};   
