exports.action = function(data){

	var answers = new Array(
		"Mais de rien ",
		"ça me fait plaisir",
		"Hé ouais, je gère !",
		"Vous savez, je suis ton plus fidèle serviteur",
		"Ouais ouais mais vous habituez pas trop",
		"Ah ! Enfin. J'ai failli attendre",
		"J'ai pas trop le choix",
		"ça me fait très plaisir ",
		"Dé nada"
	);

	var choix = Math.floor(Math.random() * answers.length);

	JarvisIASpeech(answers[choix]);
}