var steem = require('steem');

<script src="//cdn.steemjs.com/lib/latest/steem.min.js"></script>
<script src="./steem.min.js"></script>

<script>
    steem.api.getAccounts(['ned', 'dan'], function(err, response){
          console.log(err, response);
      });
</script>
