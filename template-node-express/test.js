var str = "https://wxapp.usnoon.com/static/paysuccess.html?3425201807301706143063890136=&bankInfo=%E4%B8%AD%E4%BF%A1%E9%93%B6%E8%A1%8C%28%E4%BF%A1%E7%94%A8%E5%8D%A1%29&payTime=2018-07-30+17%3A06%3A21&connectSys=UNIONPAY&sign=5BEB7D2BE5CE42D7BA7D06917E291A20&mid=898130173996007&invoiceAmount=100&settleDate=2018-07-30&billFunds=%E7%8E%B0%E9%87%91%3A100&buyerId=otdJ_uPij4n-ehc3ZDHsTUlhAnMo&mchntUuid=a4350a83592948b5a811d2e2d7b630c7&tid=21328571&totalAmount=100&couponAmount=0&buyerPayAmount=100&targetOrderId=4200000123201807309838052937&notifyId=99deada1-80d0-4216-932c-6b4754b8c96e&billFundsDesc=%E7%8E%B0%E9%87%91%E6%94%AF%E4%BB%981.00%E5%85%83%E3%80%82&subInst=102800&orderDesc=%E5%B9%B3%E5%AE%89%E7%A4%BE%E5%8C%BA%28%E5%8C%97%E4%BA%AC%29%E7%A7%91%E6%8A%80%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8%E6%B2%B3%E5%8C%97%E5%88%86%E5%85%AC%E5%8F%B8&seqId=03731954851N&merOrderId=3425201807301706143063890136&status=TRADE_SUCCESS&targetSys=WXPay&Ml=QnNo"

// merOrderId
  function GetRequest(str) {
    var url = str;
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
      var str = url.substr(1);
      strs = str.split("&");
      for (var i = 0; i < strs.length; i++) {
        theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
      }
    }
    return theRequest;
  }
  var req = GetRequest(str)
  console.log(req)


	// formatTime(40)
	// formatTime(65)
	// formatTime(104)
	// formatTime(199)
	// formatTime(60*23+6)
	// formatTime(60*24+4)
	// formatTime(2*(60*24)+1)
	// formatTime(4000)
	// formatTime(100045)

    function formatTime (time) {
	    // 格式化现实时间为： XX天XX小时
	    var result, day, hourse, minute
	    if (time >= 60 * 24) {
	      day = parseInt(time / 60 / 24)
	      hourse = parseInt(time / 60 % 24)
	      minute = parseInt(time % 60)
	      if (hourse == 24) {
	        result = day + 1 + '天'
	      } else {
	        result = day + '天' + hourse + '小时' + minute + '分'
	      }
	    } else if (time >= 60) {
	      hourse = parseInt(time / 60)
	      minute = parseInt(time % 60)
	      result = hourse + '小时' + minute + '分'
	    } else {
	      result = time + '分钟'
	    }
	    console.log(result)
	    return result
  }
