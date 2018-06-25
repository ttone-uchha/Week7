var numbers = [2, 5, 7, 10, 12, 13, 47, 48, 32, 6, 31, 94, 17, 30];
var names = [
{firstname:'Matt'	, lastname: 'Ryan' ,team:'Falcons'},
{firstname: 'Joe'	, lastname: 'Flacco' ,team:'Ravens'},
{firstname: 'Ben'	, lastname: 'Roelithsbergr' ,team:'Steelers'},
{firstname: 'Mitch'	, lastname: 'Trubisky' ,team:'Bears'},
{firstname: 'Tom'	, lastname: 'Brady' ,team:'Patriots'},
{firstname: 'Odell'	, lastname:' Beckham Jr' ,team:'Giants'},
{firstname: 'Kiko'	, lastname: 'Alonso' ,team:'Dolphins'},
{firstname: 'Akeem'	, lastname:' Ayers' ,team:'Redskins'},
{firstname: 'Chris'	, lastname:'Carson' ,team:'Seahawks'},
{firstname: 'Jay'	, lastname: 'Culter' ,team:'Dolphins'},
{firstname: 'David'	, lastname:' Johnson' ,team:'Cardinals'},
{firstname: 'Adrian', lastname: 'Clayborn' ,team:'Panthers'},
{firstname: 'Mike'	, lastname: 'Wallace' ,team:'Steelers'},
{firstname: 'Jason'	, lastname:'McCourty' ,team:'Browns'},

];



var fantasy = [
	{Brady:'300'},
	{Flacco:'200'},
		{Roelithsbergr:'25'},
		{Trubisky:'39'},
		{Beckham: '2'},
		{Alonso:'1200'},
		{Ayers: '5'},
		{Carson: '900'},
		{Culter: '25'},
		{Johnson: '19'},
	    {Clayborn: '1'},
		{Wallace: '422'},
		{McCourty: '7'},
];


var names = names.map(function() {
	return names[0].firstname + names[0].lastname + ' belongs to the ' + names[0].team 
	return names[1].firstname + names[1].lastname + ' belongs to the ' + names[1].team 
	return names[2].firstname + names[2].lastname + ' belongs to the ' + names[2].team 
	return names[3].firstname + names[3].lastname + ' belongs to the ' + names[3].team 
	return names[4].firstname + names[4].lastname + ' belongs to the ' + names[4].team 
	return names[5].firstname + names[5].lastname + ' belongs to the ' + names[5].team 
	return names[6].firstname + names[6].lastname + ' belongs to the ' + names[6].team 
	return names[7].firstname + names[7].lastname + ' belongs to the ' + names[7].team 
	return names[8].firstname + names[8].lastname + ' belongs to the ' + names[8].team 
	return names[9].firstname + names[9].lastname + ' belongs to the ' + names[9].team 
	return names[10].firstname + names[10].lastname + ' belongs to the ' + names[10].team 
	return names[11].firstname + names[11].lastname + ' belongs to the ' + names[11].team 
	return names[12].firstname + names[12].lastname + ' belongs to the ' + names[12].team 
	return names[13].firstname + names[13].lastname + ' belongs to the ' + names[13].team 
	return names[14].firstname + names[14].lastname + ' belongs to the ' + names[14].team 
});



