<?php
    $i =  urldecode("    %7B%22a5640dfdjw1e2i5q2bu3dj%22%3A%7B%22name%22%3A%221.png%22%2C%22pid%22%3A%22a5640dfdjw1e2i5q2bu3dj%22%2C%22type%22%3A%22img%22%2C%22src%22%3A%22http%3A%2F%2Fww3.sinaimg.cn%2Fsquare%2Fa5640dfdjw1e2i5q2bu3dj.jpg%22%7D%7D");
    $c = json_decode($i);
    print_r($c);
