    //30 pre-loaded characters
    var RandomAvitarId = ['204422947_2-s4-v1',
        '202203481_5-s4-v1',
        '202204404_1-s4-v1',
        '202070582_7-s4-v1',
        '109783776_0-s4-v1',
        '123973985_10-s4-v1',
        '123973985_10-s4-v1',
        '74498096_0-s4-v1',
        '76342905_0-s4-v1',
        '108590751_0-s4-v1',
        '117010983_0-s4-v1',
        '2309961_0-s4-v1',
        '103172619_0-s4-v1',
        '17480919_0-s4-v1',
        '2204128_0-s4-v1',
        '114862695_0-s4-v1',
        '135474488_0-s4-v1',
        '114869928_0-s4-v1',
        '118576805_0-s4-v1',
        '121931325_0-s4-v1',
        '2204688_0-s4-v1',
        '120785996_0-s4-v1',
        '104678677_0-s4-v1',
        '104556134_0-s4-v1',
        '102981754_0-s4-v1',
        '1866231_0-s4-v1',
        '2203656_10-s4-v1',
        '103488527_10-s4-v1',
        '4055421_10-s1-v1',
        '1884643_20-s4-v1',
        '1866965_20-s1-v1',
        '188022860_2-s4-v1',
        '111843723_20-s4-v1'
    ];

    var $AvitarId = null;
    var $NPC1Code = null;
    var $NPC2Code = null;
    var $NPC3Code = null;
    var $NPC4Code = null;
    var $NPC5Code = null;

    //Page 2
    $(document).ready(function() {
        $("#playbutton").click(function() {
            $(".page1").fadeOut();
            $(".page2").fadeIn(2000)
        });

        $("#btnPersonalAvitar").click(function() {

            window.$AvitarId = $('#txtPersonalAvitar').val();

            $('#imgAvitar1').attr("src", 'https://render.bitstrips.com/render/6972338/' + $AvitarId + ".png");
        });
        $("#btnRandomAvitar").click(function() {

            window.$AvitarId = RandomAvitarId[Math.floor(Math.random() * RandomAvitarId.length)];

            $('#imgAvitar1').attr("src", 'https://render.bitstrips.com/render/6972338/' + $AvitarId + ".png");
        });

        //Page 3
        $("#btnStartGame").click(function() {

            window.$NPC1Code = RandomAvitarId[Math.floor(Math.random() * RandomAvitarId.length)];
            window.$NPC2Code = RandomAvitarId[Math.floor(Math.random() * RandomAvitarId.length)];
            window.$NPC3Code = RandomAvitarId[Math.floor(Math.random() * RandomAvitarId.length)];
            window.$NPC4Code = RandomAvitarId[Math.floor(Math.random() * RandomAvitarId.length)];
            window.$NPC5Code = RandomAvitarId[Math.floor(Math.random() * RandomAvitarId.length)];

            $(".page2").fadeOut();
            $(".page3").fadeIn(2000);

            $('#imgNPC3').attr("src", 'https://render.bitstrips.com/v2/cpanel/9157872-' + $AvitarId + ".png?transparent=1");
            $('#imgAvitar3A').attr("src", 'https://render.bitstrips.com/v2/cpanel/9090400-' + $AvitarId + ".png?transparent=1");
            $('#imgAvitar3B').attr("src", 'https://render.bitstrips.com/v2/cpanel/10136844-' + $AvitarId + ".png?transparent=1");

            //Second Level
            //Page 4
            $('#imgAvitar3A').click(function() {
                $(".page3").fadeOut();
                $(".page4").fadeIn(2000);

                $('#imgNPC4').attr("src", 'https://render.bitstrips.com/v2/cpanel/10188020-' + $NPC1Code + ".png?transparent=1");
                $('#imgAvitar4A').attr("src", 'https://render.bitstrips.com/v2/cpanel/9101092-' + $AvitarId + ".png?transparent=1");
                $('#imgAvitar4B').attr("src", 'https://render.bitstrips.com/v2/cpanel/9940762-' + $AvitarId + ".png?transparent=1");
            });

            //Page 5
            $('#imgAvitar3B').click(function() {
                $(".page3").fadeOut();
                $(".page5").fadeIn(2000);

                $('#imgNPC5').attr("src", 'https://render.bitstrips.com/v2/cpanel/9941846-' + $AvitarId + ".png?transparent=1");
                $('#imgAvitar5A').attr("src", 'https://render.bitstrips.com/v2/cpanel/9218607-' + $AvitarId + ".png?transparent=1");
                $('#imgAvitar5B').attr("src", 'https://render.bitstrips.com/v2/cpanel/10212768-' + $AvitarId + ".png?transparent=1");
            });

            //Thrid Level
            //Page 6
            $('#imgAvitar4A').click(function() {
                $(".page4").fadeOut();
                $(".page6").fadeIn(2000);

                $('#imgNPC6').attr("src", 'https://render.bitstrips.com/v2/cpanel/10134284-' + $NPC1Code + ".png?transparent=1");
                $('#imgAvitar6A').attr("src", 'https://render.bitstrips.com/v2/cpanel/8786568-' + $AvitarId + ".png?transparent=1");
                $('#imgAvitar6B').attr("src", 'https://render.bitstrips.com/v2/cpanel/7196007-' + $AvitarId + ".png?transparent=1");
            });

            //Page 7
            $('#imgAvitar4B').click(function() {
                $(".page4").fadeOut();
                $(".page7").fadeIn(2000);
                $('#imgNPC7').attr("src", 'https://render.bitstrips.com/v2/cpanel/8810285-' + $AvitarId + ".png?transparent=1");
                $('#imgAvitar7A').attr("src", 'https://render.bitstrips.com/v2/cpanel/10214975-' + $NPC2Code + ".png?transparent=1");
                $('#imgAvitar7B').attr("src", 'https://render.bitstrips.com/v2/cpanel/9788623-' + $AvitarId + ".png?transparent=1");
            });

            //Page 8
            $('#imgAvitar5A').click(function() {
                $(".page5").fadeOut();
                $(".page8").fadeIn(2000);

                $('#imgNPC8').attr("src", 'https://render.bitstrips.com/v2/cpanel/8640391-' + $NPC1Code + ".png?transparent=1");
                $('#imgAvitar8A').attr("src", 'https://render.bitstrips.com/v2/cpanel/7854159-' + $AvitarId + ".png?transparent=1");
                $('#imgAvitar8B').attr("src", 'https://render.bitstrips.com/v2/cpanel/10188002-' + $NPC1Code + ".png?transparent=1");
            });

            //Page 9
            $('#imgAvitar5B').click(function() {
                $(".page5").fadeOut();
                $(".page9").fadeIn(2000);

                $('#imgNPC9').attr("src", 'https://render.bitstrips.com/v2/cpanel/10213819-' + $AvitarId + ".png?transparent=1");
                $('#imgAvitar9A').attr("src", 'https://render.bitstrips.com/v2/cpanel/10161328-' + $AvitarId + ".png?transparent=1");
                $('#imgAvitar9B').attr("src", 'https://render.bitstrips.com/v2/cpanel/8640391-' + $AvitarId + ".png?transparent=1");
            });

            //Fourth Level
            //Page 10
            $('#imgAvitar6A').click(function() {
                $(".page6").fadeOut();
                $(".page10").fadeIn(2000);

                $('#imgNPC10').attr("src", 'https://render.bitstrips.com/v2/cpanel/10188002-' + $NPC1Code + ".png?transparent=1");
                $('#imgAvitar10A').attr("src", 'https://render.bitstrips.com/v2/cpanel/9073921-' + $AvitarId + ".png?transparent=1");
                $('#imgAvitar10B').attr("src", 'https://render.bitstrips.com/v2/cpanel/9940762-' + $AvitarId + ".png?transparent=1");
            });

            //Page 11
            $('#imgAvitar6B').click(function() {
                $(".page6").fadeOut();
                $(".page11").fadeIn(2000);

                $('#imgNPC11').attr("src", 'https://render.bitstrips.com/v2/cpanel/10188002-' + $NPC1Code + ".png?transparent=1");
                $('#imgAvitar11A').attr("src", 'https://render.bitstrips.com/v2/cpanel/9073921-' + $AvitarId + ".png?transparent=1");
                $('#imgAvitar11B').attr("src", 'https://render.bitstrips.com/v2/cpanel/9940762-' + $AvitarId + ".png?transparent=1");
            });

            //Page 12
            $('#imgAvitar7A').click(function() {
                $(".page7").fadeOut();
                $(".page12").fadeIn(2000);

                $('#imgNPC12').attr("src", 'https://render.bitstrips.com/v2/cpanel/9946964-' + $AvitarId + ".png?transparent=1");
                $('#imgAvitar12A').attr("src", 'https://render.bitstrips.com/v2/cpanel/9945144-' + $AvitarId + ".png?transparent=1");
                $('#imgAvitar12B').attr("src", 'https://render.bitstrips.com/v2/cpanel/9602791-' + $AvitarId + ".png?transparent=1");
            });

            //Page 13
            $('#imgAvitar7B').click(function() {
                $(".page7").fadeOut();
                $(".page13").fadeIn(2000);

                $('#imgNPC13').attr("src", 'https://render.bitstrips.com/v2/cpanel/9205465-' + $NPC4Code + ".png?transparent=1");
                $('#imgAvitar13A').attr("src", 'https://render.bitstrips.com/v2/cpanel/10213818-' + $AvitarId + ".png?transparent=1");
                $('#imgAvitar13B').attr("src", 'https://render.bitstrips.com/v2/cpanel/10214013-' + $AvitarId + ".png?transparent=1");
            });

            //Page 14
            $('#imgAvitar8A').click(function() {
                $(".page8").fadeOut();
                $(".page14").fadeIn(2000);

                $('#imgNPC14').attr("src", 'https://render.bitstrips.com/v2/cpanel/10188002-' + $NPC1Code + ".png?transparent=1");
                $('#imgAvitar14A').attr("src", 'https://render.bitstrips.com/v2/cpanel/9073921-' + $AvitarId + ".png?transparent=1");
                $('#imgAvitar14B').attr("src", 'https://render.bitstrips.com/v2/cpanel/9940762-' + $AvitarId + ".png?transparent=1");
            });

            //Page 15
            $('#imgAvitar8B').click(function() {
                $(".page8").fadeOut();
                $(".page15").fadeIn(2000);

                $('#imgNPC15').attr("src", 'https://render.bitstrips.com/v2/cpanel/10188002-' + $NPC1Code + ".png?transparent=1");
                $('#imgAvitar15A').attr("src", 'https://render.bitstrips.com/v2/cpanel/9073921-' + $AvitarId + ".png?transparent=1");
                $('#imgAvitar15B').attr("src", 'https://render.bitstrips.com/v2/cpanel/9940762-' + $AvitarId + ".png?transparent=1");
            });

            //Page 16
            $('#imgAvitar9A').click(function() {
                $(".page9").fadeOut();
                $(".page16").fadeIn(2000);

                $('#imgNPC16').attr("src", 'https://render.bitstrips.com/v2/cpanel/9951746-' + $AvitarId + ".png?transparent=1");
                $('#imgAvitar16A').attr("src", 'https://render.bitstrips.com/v2/cpanel/10214711-' + $AvitarId + ".png?transparent=1");
                $('#imgAvitar16B').attr("src", 'https://render.bitstrips.com/v2/cpanel/9990837-' + $AvitarId + ".png?transparent=1");
            });

            //Page 17
            $('#imgAvitar9B').click(function() {
                $(".page9").fadeOut();
                $(".page17").fadeIn(2000);

                $('#imgNPC17').attr("src", 'https://render.bitstrips.com/v2/cpanel/10214008-' + $NPC1Code + ".png?transparent=1");
                $('#imgAvitar17A').attr("src", 'https://render.bitstrips.com/v2/cpanel/10214013-' + $AvitarId + ".png?transparent=1");
                $('#imgAvitar17B').attr("src", 'https://render.bitstrips.com/v2/cpanel/9945793-' + $AvitarId + ".png?transparent=1");
            });

            //Fifth Level--Endings
            //Page 18
            $('#imgAvitar10A').click(function() {
                $(".page10").fadeOut();
                $(".page18").fadeIn(2000);

                $('#imgEnding18').attr("src", 'https://render.bitstrips.com/v2/cpanel/10188002-' + $NPC1Code + ".png?transparent=1");
            });

            //Page 19
            $('#imgAvitar10B').click(function() {
                $(".page10").fadeOut();
                $(".page19").fadeIn(2000);

                $('#imgEnding19').attr("src", 'https://render.bitstrips.com/v2/cpanel/10188002-' + $NPC1Code + ".png?transparent=1");
            });

            //Page 20
            $('#imgAvitar11A').click(function() {
                $(".page11").fadeOut();
                $(".page20").fadeIn(2000);

                $('#imgEnding20').attr("src", 'https://render.bitstrips.com/v2/cpanel/10188002-' + $NPC1Code + ".png?transparent=1");
            });

            //Page 21
            $('#imgAvitar11B').click(function() {
                $(".page11").fadeOut();
                $(".page21").fadeIn(2000);

                $('#imgEnding21').attr("src", 'https://render.bitstrips.com/v2/cpanel/10188002-' + $NPC1Code + ".png?transparent=1");
            });

            //Page 22
            $('#imgAvitar12A').click(function() {
                $(".page12").fadeOut();
                $(".page22").fadeIn(2000);

                $('#imgEnding22').attr("src", 'https://render.bitstrips.com/v2/cpanel/9090383-' + $AvitarId + ".png?transparent=1");
            });

            //Page 23
            $('#imgAvitar12B').click(function() {
                $(".page12").fadeOut();
                $(".page23").fadeIn(2000);

                $('#imgEnding23').attr("src", 'https://render.bitstrips.com/v2/cpanel/9788526-' + $AvitarId + ".png?transparent=1");
            });

            //Page 24
            $('#imgAvitar13A').click(function() {
                $(".page13").fadeOut();
                $(".page24").fadeIn(2000);

                $('#imgEnding24').attr("src", 'https://render.bitstrips.com/v2/cpanel/9988567-' + $AvitarId + ".png?transparent=1");
            });

            //Page 25
            $('#imgAvitar13B').click(function() {
                $(".page13").fadeOut();
                $(".page25").fadeIn(2000);

                $('#imgEnding25').attr("src", 'https://render.bitstrips.com/v2/cpanel/9942135-' + $AvitarId + ".png?transparent=1");
            });

            //Page 26
            $('#imgAvitar14A').click(function() {
                $(".page14").fadeOut();
                $(".page26").fadeIn(2000);

                $('#imgEnding26').attr("src", 'https://render.bitstrips.com/v2/cpanel/10188002-' + $NPC1Code + ".png?transparent=1");
            });

            //Page 27
            $('#imgAvitar14B').click(function() {
                $(".page14").fadeOut();
                $(".page27").fadeIn(2000);

                $('#imgEnding27').attr("src", 'https://render.bitstrips.com/v2/cpanel/10188002-' + $NPC1Code + ".png?transparent=1");
            });

            //Page 28
            $('#imgAvitar15A').click(function() {
                $(".page15").fadeOut();
                $(".page28").fadeIn(2000);

                $('#imgEnding28').attr("src", 'https://render.bitstrips.com/v2/cpanel/10188002-' + $NPC1Code + ".png?transparent=1");
            });

            //Page 29
            $('#imgAvitar15B').click(function() {
                $(".page15").fadeOut();
                $(".page29").fadeIn(2000);

                $('#imgEnding29').attr("src", 'https://render.bitstrips.com/v2/cpanel/10188002-' + $NPC1Code + ".png?transparent=1");
            });

            //Page 30
            $('#imgAvitar16A').click(function() {
                $(".page16").fadeOut();
                $(".page30").fadeIn(2000);

                $('#imgEnding30').attr("src", 'https://render.bitstrips.com/v2/cpanel/9130148-' + $AvitarId + ".png?transparent=1");
            });

            //Page 31
            $('#imgAvitar16B').click(function() {
                $(".page16").fadeOut();
                $(".page31").fadeIn(2000);

                $('#imgEnding31').attr("src", 'https://render.bitstrips.com/v2/cpanel/9669649-' + $AvitarId + ".png?transparent=1");
            });

            //Page 32
            $('#imgAvitar17A').click(function() {
                $(".page17").fadeOut();
                $(".page32").fadeIn(2000);

                $('#imgEnding32').attr("src", 'https://render.bitstrips.com/v2/cpanel/9157872-' + $AvitarId + ".png?transparent=1");
            });

            //Page 33
            $('#imgAvitar17B').click(function() {
                $(".page17").fadeOut();
                $(".page33").fadeIn(2000);

                $('#imgEnding33').attr("src", 'https://render.bitstrips.com/v2/cpanel/8968038-' + $AvitarId + ".png?transparent=1");
            });
        });
    });
    