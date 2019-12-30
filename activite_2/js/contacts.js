class Contacts {

	
	constructor(nom, prenom){
		this.nom = nom;
		this.prenom = prenom;
	}

}

function ajouterContact(){
	var addPrenom = prompt("Entrez le prénom de votre contact :");
	if (addPrenom == null)
	{
		console.log("Vous n'avez pas entré le prénom du contact ou avez annulé, retour au menu.");
	}else{
		var addNom = prompt("Entrez votre nom de votre contact :"); 
		if (addNom == null)
		{
			console.log("Vous n'avez pas entré le nom du contact ou avez annulé, retour au menu.");
		}else{
			listeContact.push(new Contacts(addNom, addPrenom));
			console.log("Le nouveau contact à été ajouté !");

		}
	}
	
}

function afficherContacts(){
	console.log("\nVoici la liste de tout les contacts :")
	listeContact.forEach(valeur => { console.log("Nom : "+valeur.nom+" Prenom : "+valeur.prenom) });
}

function affichageMenu(){
	console.log("\n1. Afficher la liste des contacts");
	console.log("2. Ajouter un contact");
	console.log("3. Quitter");
}

//Initialisation
console.log("Bienvenue dans le gestionnaire des contacts !");
const Levisse = new Contacts("Levisse", "Carole");
const Nelsonne = new Contacts("Nelsonne", "Mélodie");
var listeContact = [Levisse, Nelsonne];
choixMenu();

function choixMenu(){
	affichageMenu();

	const option = prompt("Choisissez une option : ");
	switch (option) {
		//"Afficher les contacts"
		case "1":
			afficherContacts();
			choixMenu();
			break;
		//"Ajouter un contact"
		case "2":
			ajouterContact();
			choixMenu();
			break;
		//"Quitter"
		case "0":
			console.log("Merci d'avoir utilisé ce service.")
			break;
		default:
			console.log("Erreur, veillez choisir un chiffre cohérent avec le menu.");
			choixMenu();
	}
}
