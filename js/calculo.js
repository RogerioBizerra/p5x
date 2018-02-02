

	// Variaveis
	var modelo_lav = 0, qtd_kg_lav = 0, count_maqs = 0;

$(function() {
	// Ocultar telas 2, 3, 4 e 5

	//$(".calculo-1").hide();
	$(".calculo-2").hide();
	$(".calculo-3").hide();
	$(".calculo-4").hide();

	// ** TELA 2 ** Armazena na variavel o modelo da lavadora e exibe a proxima tela
	$(".modelo-lav").on("click", function() {
		modelo_lav = $(this).val();

		$(".calculo-1").fadeOut(400);
		$(".calculo-2").fadeIn(2000);
		$(".calculo-3").hide();
	});

	// ** TELA 3 ** Armazena na variavel a capacidade da lavadora do usuario e exibe a proxima tela
	$(".capacidade-lav").on("click", function() {
		qtd_kg_lav = $(this).val();

		$(".calculo-1").hide();
		$(".calculo-2").fadeOut(400);
		$(".calculo-3").fadeIn(2000);
	});

	// ** TELA 4 ** Armazena na variavel a quantidade de maquinas lavadas e exibe a proxima tela
	$(".next-tela-5").on("click", function(){
		count_maqs = $("input[name='count-maqs']").val();
		
		$(".calculo-1").hide();
		$(".calculo-2").hide();
		$(".voltar").hide();
		$(".calculo-3").fadeOut(400);
		$(".calculo-4").fadeIn(2000);

		var semana = parseFloat(count_maqs).toFixed(2); // quantidade de ciclos de lavagem por semana
		var roupa = parseFloat(qtd_kg_lav).toFixed(2); // capacidade da lavadora do usuario
		var modelo = modelo_lav; // Modelo Lavadora

		switch(modelo) {
			case "FS160P3":
				//Panasonic

				var cadlp, cmp, cap;

				cmdp = 9.9; //Consumo Médio (L/Kg/ciclo)
				cadlp = cmdp * roupa; //Consumo de água durante a lavagem
				cmp = cadlp * semana * 4; //Consumo Mensal 
				cap = cmp * 12; //Consumo Anual

				//Electrolux

				var cmdb, cadlb, cmb, cab;
				cmdb = 11.6; //Consumo Médio (L/Kg/ciclo)
				cadlb = cmdb * roupa; //Consumo de água durante a lavagem
				cmb = cadlb * semana * 4; //Consumo Mensal 
				cab = cmb * 12; //Consumo Anual

				ecomes = cmb - cmp; //Economia Panasonic (litros/mês)
				ecoano = cab - cap; //Economia Panasonic (litros/ano)

				var ecomes, ecoano, porcent;
				
				porcent = ecomes * 100;
				porcent = porcent / cmb;

				break;
			case "FS160G3":
				//Panasonic

				var cadlp, cmp, cap;

				cmdp = 9.9; //Consumo Médio (L/Kg/ciclo)
				cadlp = cmdp * roupa; //Consumo de água durante a lavagem
				cmp = cadlp * semana * 4; //Consumo Mensal 
				cap = cmp * 12; //Consumo Anual

				//Electrolux

				var modeloe, cadle, cme, cae;
				modeloe = 11.6; //Consumo Médio (L/Kg/ciclo)
				cadle = modeloe * roupa; //Consumo de água durante a lavagem
				cme = cadle * semana * 4; //Consumo Mensal 
				cae = cme * 12; //Consumo Anual

				ecomes = cme - cmp; //Economia Panasonic (litros/mês)
				ecoano = cae - cap; //Economia Panasonic (litros/ano)
				
				var ecomes, ecoano, porcent;
				
				porcent = ecomes * 100;
				porcent = porcent / cme;

				break;
			case "FS160B3":
				//Panasonic

				var cadlp, cmp, cap;

				cmdp = 9.5; //Consumo Médio (L/Kg/ciclo)
				cadlp = cmdp * roupa; //Consumo de água durante a lavagem
				cmp = cadlp * semana * 4; //Consumo Mensal 
				cap = cmp * 12; //Consumo Anual

				//Brastemp

				var modeloe, cadle, cme, cae;
				modeloe = 12.3; //Consumo Médio (L/Kg/ciclo)
				cadle = modeloe * roupa; //Consumo de água durante a lavagem
				cme = cadle * semana * 4; //Consumo Mensal 
				cae = cme * 12; //Consumo Anual

				ecomes = cme - cmp; //Economia Panasonic (litros/mês)
				ecoano = cae - cap; //Economia Panasonic (litros/ano)
				
				var ecomes, ecoano, porcent;
				
				porcent = ecomes * 100;
				porcent = porcent / cme;

				break;
			default:
				//Panasonic

				var cadlp, cmp, cap;

				cmdp = 9.5; //Consumo Médio (L/Kg/ciclo)
				cadlp = cmdp * roupa; //Consumo de água durante a lavagem
				cmp = cadlp * semana * 4; //Consumo Mensal 
				cap = cmp * 12; //Consumo Anual

				//Brastemp

				var modeloe, cadle, cme, cae;
				modeloe = 12.3; //Consumo Médio (L/Kg/ciclo)
				cadle = modeloe * roupa; //Consumo de água durante a lavagem
				cme = cadle * semana * 4; //Consumo Mensal 
				cae = cme * 12; //Consumo Anual

				ecomes = cme - cmp; //Economia Panasonic (litros/mês)
				ecoano = cae - cap; //Economia Panasonic (litros/ano)
				
				var ecomes, ecoano, porcent;
				
				porcent = ecomes * 100;
				porcent = porcent / cme;
				break;
		}

		//3880.80 -> 100% -> por mês
		porcent = porcent*3;

		var galao = ecomes / 0.5;


		$(".modelo-maquina").append('<img src="images/resultado/'+ (modelo).toLowerCase() +'.png">');
		//$(".message-maquina").append('<p style="font-size:15px;">* Eficiência de lavagem em água fria nos modelos FS160G3, F160B3 e F140B3, segundo a Tabela Inmetro de consumo/eficiência energética para lavadoras de roupas automáticas com abertura superior (top load).</p>');
		$(".message-maquina").append("<p class='line1'>A Panasonic " +modelo+ " economiza:</p><span class='strong'>" +parseFloat(ecomes).toFixed(1)+ "L</span> <span class='span'>por mês!</span>");
		$(".message-garrafa").append("<p class='line1'>Sabia que isso equivale a</><p class='strong'>" +parseFloat(galao).toFixed(1)+"</p><p class='span'>garrafinhas de água de 500ml?</p>");
	});



	// CONTADOR PARA TELA 4 ** Quantidade de lavadora lavada por semana **
	$(".count-maqs").append('<span class="inc button">+</span><div class="dec button">-</div>');

	$(".button").on("click", function() {
		var $button = $(this);
		var oldValue = $button.parent().find("#count-maqs").val();

		if ($button.text() == "+") {
			var newVal = parseFloat(oldValue) + 0.5;
		} else {
			// Don't allow decrementing below zero
			if (oldValue > 0) {
				var newVal = parseFloat(oldValue) - 0.5;
			} else {
				newVal = 0;
			}
		}
		$button.parent().find("#count-maqs").val(newVal);
	});
});