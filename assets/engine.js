$(document).ready(function(){

    $('#id_nama_company').text(datas['company']['nama']);
    $('#id_email').text(datas['company']['email']);
    $('#id_shop').attr('href',datas['company']['shop_link']);

    // $('#id_twitter').attr('href',datas['company']['twitter_link']);
    // $('#id_facebook').attr('href',datas['company']['facebook_link']);
    // $('#id_instagram').attr('href',datas['company']['instagram_link']);
    // $('#id_linkedin').attr('href',datas['company']['linkedin_link']);

    var template;

    $.each(datas['template'], function(index,data){
        console.log(data["name"]);
        template = `
        <div class="col-lg-6 col-md-6" ${data['jenis']}>
            <a href="${data['preview_link']}" target=_blank class="">
                <img class="card-img-top mb-2" src="${data['img']}" alt="Card image" style="width:100%">

                <div style="position: absolute;top: 90%;left: 50%;transform: translate(-50%, -50%);" class="h3">
                ${data['name']}
                </div>
            </a>
        </div>
        `;
        // <div class="mix col-lg-6 col-md-6 web">
        //     <a href="assets/1.jpg" class="portfolio-item set-bg" data-setbg="assets/1.jpg">
        //         <div class="pi-inner">
        //             <h2>> ${data['name']}</h2>
        //             <h2>> See Preview</h2>
        //         </div>
        //     </a>
        // </div>

        $('#id_template').append(template);
    });

    
  
});