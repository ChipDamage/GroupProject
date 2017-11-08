$(function () {

    var names = [
      //{ websiteName: 'Amazon', websiteAddress: "https://amazon.com/" },
      //{ websiteName: 'Barnes and Noble', websiteAddress: "https://www.barnesandnoble.com/" },
      //{ websiteName: 'Chegg', websiteAddress: "https://chegg.com/" },
      //{ websiteName: 'ValoreBooks', websiteAddress: "https://www.valorebooks.com/" },
      //{ websiteName: '2nd and Charles', websiteAddress: "http://2ndandcharles.com/" },
      //{ websiteName: 'alibris', websiteAddress: "https://www.alibris.com/" },
      //{ websiteName: 'ThriftBooks', websiteAddress: "https://www.thriftbooks.com/" }

      { websiteName: 'Amazon', websiteAddress: "https://www.amazon.com/Kill-Mockingbird-Harper-Lee/dp/0446310786" },
      { websiteName: 'Barnes and Noble', websiteAddress: "https://www.barnesandnoble.com/w/to-kill-a-mockingbird-harper-lee/1100151011?ean=9780446310789#/" },
      { websiteName: 'Chegg', websiteAddress: "https://www.chegg.com/textbooks/to-kill-a-mockingbird-1st-edition-9780446310789-0446310786?trackid=06a3f001&strackid=7a96d42e&ii=1" },
      { websiteName: 'ValoreBooks', websiteAddress: "https://www.valorebooks.com/textbooks/to-kill-a-mockingbird/9780446310789" },
      { websiteName: '2nd and Charles', websiteAddress: "http://2ndandcharles.com/" },
      { websiteName: 'Alibris', websiteAddress: "https://www.alibris.com/To-Kill-a-Mockingbird-Harper-Lee/book/6718547?matches=1969" },
      { websiteName: 'ThriftBooks', websiteAddress: "https://www.thriftbooks.com/w/to-kill-a-mockingbird-by-harper-lee/248147/#isbn=0061120081" }

    ];

    function chooseToExclude(arr) {
        var x = Math.floor(Math.random() * 5);
        var array = arr;
        array.splice(x, 1);
        return array;
    }

    function generatePrice() {
        var x = Math.ceil(Math.random() * 10000) / 100;
        return x.toFixed(2);
    } 

	//real stuff
    var names_fake = names;
    var names_real = chooseToExclude(names_fake);
    for (var i = 0; i < names_real.length; i++) {
        var currentSite = names_real[i];
        var currentWebsiteAddress = currentSite.websiteAddress;
        var currentWebsiteName = currentSite.websiteName;
        var currentPrice = generatePrice();

        $('#sourcesTable').append('<tr><td>' + '<a href=' + '"' + currentWebsiteAddress + '" target="_blank">' + currentWebsiteName + '</a>' + '</td><td>$' + currentPrice + '</td></tr>');
    }
});
