Search.setIndex({docnames:["changelog","config/auth","config/handlers","config/http-destinations","config/index","config/ldap","config/main","config/mixins","config/replication","config/routing","config/session-pools","index","installation","internals/index","internals/load_balancing","internals/request_id","rust_api/swindon/index","swindon-lattice/backend","swindon-lattice/crdt","swindon-lattice/examples","swindon-lattice/frontend","swindon-lattice/index","swindon-lattice/lattices","swindon-lattice/upstream","swindon-lattice/websocket_shutdown_codes"],envversion:52,filenames:["changelog.rst","config/auth.rst","config/handlers.rst","config/http-destinations.rst","config/index.rst","config/ldap.rst","config/main.rst","config/mixins.rst","config/replication.rst","config/routing.rst","config/session-pools.rst","index.rst","installation.rst","internals/index.rst","internals/load_balancing.rst","internals/request_id.rst","rust_api/swindon/index.rst","swindon-lattice/backend.rst","swindon-lattice/crdt.rst","swindon-lattice/examples.rst","swindon-lattice/frontend.rst","swindon-lattice/index.rst","swindon-lattice/lattices.rst","swindon-lattice/upstream.rst","swindon-lattice/websocket_shutdown_codes.rst"],objects:{"":{"/swindon/authorize_connection":[23,0,1,"post--swindon-authorize_connection"],"/swindon/session_inactive":[23,0,1,"post--swindon-session_inactive"],"/v1/connection/(str:conn_id)/lattices/(path:namespace)":[17,2,1,"put--v1-connection-(str-conn_id)-lattices-(path-namespace)"],"/v1/connection/(str:conn_id)/subscriptions/(path:topic)":[17,2,1,"put--v1-connection-(str-conn_id)-subscriptions-(path-topic)"],"/v1/connection/(str:conn_id)/users":[17,2,1,"put--v1-connection-(str-conn_id)-users"],"/v1/lattice/(path:namespace)":[17,0,1,"post--v1-lattice-(path-namespace)"],"/v1/publish/(path:topic)":[17,0,1,"post--v1-publish-(path-topic)"],"/v1/user/(str:user_id)/users":[17,2,1,"put--v1-user-(str-user_id)-users"],"accept-forwarded-headers-from":[1,3,1,"-"],"additional-queries":[5,3,1,"-"],"allowed-network":[1,3,1,"-"],"backend-connections-per-ip-port":[3,3,1,"-"],"content-type":[2,3,1,"-"],"debug-logging":[6,3,1,"-"],"debug-routing":[6,3,1,"-"],"disk-pools":[6,5,1,"-"],"extra-headers":[2,3,1,"-"],"fallback-mode":[2,3,1,"-"],"fallback-to-plain":[2,3,1,"-"],"first-byte-timeout":[6,3,1,"-"],"forwarded-ip-header":[1,3,1,"-"],"generate-index":[2,3,1,"-"],"generated-index-max-files":[2,3,1,"-"],"headers-timeout":[6,3,1,"-"],"http-destinations":[6,5,1,"-"],"http-route":[2,3,1,"-"],"inactivity-handlers":[10,3,1,"-"],"index-files":[2,3,1,"-"],"input-body-byte-timeout":[6,3,1,"-"],"input-body-whole-timeout":[6,3,1,"-"],"ip-header":[2,3,1,"-"],"keep-alive-timeout":[6,3,1,"-"],"listen-error-timeout":[10,3,1,"-"],"load-balancing":[3,3,1,"-"],"login-attribute":[5,3,1,"-"],"login-header":[5,3,1,"-"],"max-connections":[10,3,1,"-"],"max-payload-size":[10,3,1,"-"],"max-request-timeout":[3,3,1,"-"],"message-handlers":[2,3,1,"-"],"output-body-byte-timeout":[6,3,1,"-"],"output-body-whole-timeout":[6,3,1,"-"],"override-host-header":[3,3,1,"-"],"password-attribute":[5,3,1,"-"],"pipeline-depth":[10,3,1,"-"],"plain-root":[2,3,1,"-"],"queue-size-for-503":[3,3,1,"-"],"reconnect-timeout":[8,3,1,"-"],"redirect-to-domain":[2,3,1,"-"],"request-id-header":[3,3,1,"-"],"response-buffer-size":[2,3,1,"-"],"safe-pipeline-timeout":[3,3,1,"-"],"search-base":[5,3,1,"-"],"server-name":[6,3,1,"-"],"session-pool":[2,3,1,"-"],"session-pools":[6,5,1,"-"],"set-group":[6,3,1,"-"],"set-user":[6,3,1,"-"],"stream-requests":[2,3,1,"-"],"strip-host-suffix":[2,3,1,"-"],"text-charset":[2,3,1,"-"],"version-arg":[2,3,1,"-"],"version-chars":[2,3,1,"-"],"version-split":[2,3,1,"-"],"versioned-root":[2,3,1,"-"],TBD:[10,3,1,"-"],addresses:[5,3,1,"-"],compatibility:[2,3,1,"-"],counter:[18,4,1,"-"],destination:[5,3,1,"-"],handlers:[6,5,1,"-"],listen:[10,3,1,"-"],mode:[2,3,1,"-"],path:[2,3,1,"-"],peers:[8,3,1,"-"],pool:[2,3,1,"-"],register:[18,4,1,"-"],routing:[6,5,1,"-"],set:[18,4,1,"-"]}},objnames:{"0":["http","post","HTTP post"],"1":["http","delete","HTTP delete"],"2":["http","put","HTTP put"],"3":["swindon","opt","Configuration Option"],"4":["swindon","crdt","CRDT Type"],"5":["swindon","sect","Configuration Section"]},objtypes:{"0":"http:post","1":"http:delete","2":"http:put","3":"swindon:opt","4":"swindon:crdt","5":"swindon:sect"},terms:{"100k":3,"100m":[6,8,10],"10mib":[2,10],"10s":[6,17],"120k":11,"15s":6,"32byte":15,"90s":6,"abstract":0,"break":[0,2],"byte":[2,3,6,15],"case":[0,1,2,9,10,17,20,21,22],"char":[2,15,20],"default":[0,1,2,3,6,8,10,14],"final":23,"float":18,"function":[6,17,22,24],"import":3,"long":[14,20],"new":[0,2,6,18,22,24],"null":[0,2,3,6],"public":[0,1,2,12,17,22],"return":[0,2,17,20,24],"short":[2,6,7,10],"static":[0,4,6,7,9,12],"super":[1,2],"true":[2,12],"try":22,"var":24,"while":[0,10,11,15,20],Added:0,And:[2,5,19,22],But:[0,1,3,11,12,20,22,24],DoS:[2,6,10],For:[1,2,3,7,20,22],IPs:[3,5],Not:[9,17,24],The:[0,1,2,5,6,9,11,14,17,20,21,22,23],There:[3,6,7,15,17,19],These:[2,15,17,24],Use:2,Uses:19,Using:[11,15],_counter:22,_regist:2,abc:23,abl:[2,22],about:[11,14,20],abov:[0,9,11,12,17,20,22,24],accept:[1,3,6,8,10,15],access:[1,2,5,22],accord:0,account:3,accross:7,across:1,activ:[0,6,14,20],actual:5,adbeef:2,add:[0,2,5,15,17,23],added:[0,2,18,23],adding:0,addit:[0,5,15,20],address:[0,1,2,3,5,6,7,8,10,23],admin:[1,6,9],after:[0,3,6,10,17,20],again:[0,22],against:[5,9,23],age:2,agent:[0,2],aggreg:22,aid:15,aim:22,aiohttp:19,algorithm:15,aliv:[3,6,14],all:[0,1,2,3,6,7,8,9,10,11,17,19,20,22,23],allow:[0,1,2,6,7,8,17,21,24],allowal:[0,4],alphanumer:15,alreadi:[0,5,17],also:[0,1,2,3,5,6,8,10,12,14,15,17,20,22,23,24],alwai:[20,22],ani:[0,2,6,8,17,18,19,20,21,22,24],anoth:[0,1,7,15,22],another_regist:18,anymor:0,anyth:[0,1,23],anywai:2,api:[0,2,3,5,11,21,23],app1:7,app2:7,app:19,appear:20,appli:[0,1],applic:[0,2,6,10,11,17,20,21,23,24],approach:15,apt:12,arbitrari:[2,20,22,23],arbitrarili:10,arg:2,args_arrai:[20,23],argument:[2,20,23],arrai:[20,23],arriv:22,ascii:20,assum:[9,15],async:2,asynchron:[2,3],attack:[2,6,10,15],attibut:5,attribut:[5,17],auth1:1,auth:[0,4,11,20,23],authent:[5,24],author:[0,2,4,6,7,20,21,24],authorize_connect:[0,2,23],automat:17,auxilliari:20,avail:[6,18],avoid:[3,7,22],bacic:24,backend:[0,2,3,6,8,10,11,14,19,20,21,24],backend_error:24,background:19,bad:17,balanc:[3,11,13],bare:[2,20],base64:[2,15,23],base64encod:23,base:[0,1,2,5],baseredirect:2,basi:22,basic:[0,2,4,6,19,24],becaus:[1,2,14,15,24],becom:[14,17],been:[2,6],befor:[0,2,6],behalf:22,behavior:[0,2,6],being:[3,20],below:2,best:14,better:[0,6,19],between:[6,8,15,17,21,22],big:6,bin:4,binari:12,bind:[5,6,8],bit:[15,22],block:3,board2:19,board:19,bodi:[2,6,17,20],bootstrap:19,both:[0,1,2,18,19,22],broken:0,brotli:0,browser:20,buffer:2,bug:0,bugfix:0,bump:[0,6,10],busi:18,cach:[0,2],call:[0,8,17,18,21,22],can:[0,1,2,3,6,7,10,12,14,15,17,18,22,23,24],cancel:3,cannot:20,cantal:0,carefulli:3,cargo:11,caught:[6,8,10],caus:[17,20],chanc:[6,10],chang:[1,2,6,11,14,22],channel:17,charact:[0,2,15,17,20],charset:[0,2,12],chart:14,chat1:23,chat2:[19,23],chat:[2,6,10,17,19,20,22,23],chat_send_messag:2,check:9,chosen:6,chromium:24,chunk:2,clash:[15,22],clean:[0,7],client:[0,1,2,6,8,10,17,20,21],close:[20,23,24],code:[0,2,3,11,19,20,21,23],coincid:19,coincident:22,com:[1,2,3,7,9,17,23],combin:[3,10],command:12,commun:19,commut:[18,22],compat:[0,2],compil:0,complet:20,complex:21,compon:[2,12,17],componet:17,concept:14,config:[0,7,11],configur:[0,5,7,11],conflict:[0,18],conn_id:17,connect:[0,1,3,5,6,8,10,11,14,17,20,21,22,23,24],connectin:0,connection_id:23,conserv:[2,3],consid:[0,2,3,5,6,17,20,23],consist:[2,5,15,22],consol:24,contain:[0,1,2,7,10,12,17,20,22,23],content:[0,2,11,13,17,20,23],context:22,continu:2,control:[0,2],conveni:1,cooki:[20,24],coonnect:14,corpor:1,correct:17,correctli:[0,22],correspond:[2,17,24],could:[0,6],couldn:0,counter:18,cover:21,crash:[0,15],crate:[0,11],crdt:[0,2,11,17,21,22],creat:[2,3,19],crossdomain:2,css:12,current:[1,2,3,5,6,14,15,20,23],custom:[2,24],dai:[2,6,11],dashboard:11,data:[0,1,2,8,10,15,17,18,20,22,23,24],data_error:20,databas:2,datacent:22,date:[2,19],deadbeef:2,deb:12,debug:[2,6,15],decod:20,decompress:2,deep:22,defin:[0,3,17,20],definit:7,delai:[6,22],delet:[17,18],deliv:[0,22],demand:22,deni:6,denot:6,depend:[2,3,20,22],deploy:2,deprec:[0,2],depth:[6,10],describ:[6,9,14,20,22,23,24],descript:14,descriptor:[6,10],desctin:6,design:21,desir:0,despit:22,desrib:0,destin:[0,2,4,6,7,10,11,23],detail:[0,19,20,23],dev:0,develop:[11,13],devic:[0,22],dict:22,dictionari:[20,22],die:22,differ:[0,2,3,7,14,17,19,21,22],directli:[1,2],directori:[0,2],disconnect:[18,22],disk:[0,2,6,7],displai:[6,19],distribut:3,document:[5,13,15],doe:[2,14,17,19,21],doesn:[2,5,9,15,24],doing:[6,8],domain:[0,1,2,3],don:[0,2,3,6,14],done:9,dot:[0,2,17],down:22,downsid:15,drain:15,drop:[0,22],due:0,dummi:2,duplic:[20,24],durat:17,dure:22,each:[0,3,5,6,10,14,17],earlier:3,easi:[2,19],easier:[0,2,14],echo:[2,12],edg:[0,22],effect:[0,3,6,18],effici:21,eight:2,either:[9,17,18,20],element:18,emfil:[6,10],emploi:8,empti:[0,4,6,7,9,20],emptygif:[2,6,7],enabl:[2,6,14],encod:[0,2,23],encount:20,end:9,endpoint:[0,17,23],enfil:[6,10],enhanc:0,enough:15,ensur:7,entri:[9,17],env_logg:0,equal:2,equival:1,erorr:24,error:[0,2,6,8,10,17,21,24],error_cod:20,error_kind:20,establish:20,estim:15,etc:[12,23],even:[2,20],event:[21,24],event_typ:20,eventu:11,ever:[2,18],everi:[0,15,19,22],everybodi:1,everyth:1,everywher:0,exact:[1,2,9],exactli:[10,15],exampl:[1,2,3,4,5,6,7,9,11,17,21,23],except:[0,6,23],execut:5,exist:[0,6],expect:[2,17],experiment:[0,5,17],expir:[2,17],expires_in:[0,17],explicit:0,explicitli:1,expos:[6,10,15,20],ext:2,extens:[0,2],extra:2,extract:2,fail:[0,3,6,22,24],fake:1,fallback:2,fals:2,famili:22,fast:3,fatal:[21,24],fatal_error:[21,24],favicon:9,featur:11,fetch:[2,5,6,15],few:[2,14,15,21],field:[0,20,21,23],file:[0,4,6,7,9,10,12],filenam:2,filesystem:2,filter:5,find:[0,2],first:[2,3,6,9,14,20],fit:[2,15],fix:0,flag:1,flight:[3,6,10],fly:2,folder:[2,7,12],follow:[6,7,17,20,22,23],forbidden:24,form:12,format:[0,2,4,6,7,17,21],forward:[1,2,6],found:[2,9,17,24],four:[19,20],free:18,freed:[6,10],from:[0,1,2,3,6,7,10,11,12,14,15,17,18,19,20,21,22,24],front:17,frontend:[0,1,3,11,17,19,21,23],full:[2,6],fulli:10,futur:[0,2,3,5,6,15,20],gatewai:22,gener:[0,2,6,17,21],get:[0,2,8,12,15],gif:[4,6,9],github:11,glob:2,gone:24,goo:14,good:[2,15],got:1,grok:19,group:[1,5,6],grow:[18,22],guarante:[2,22,24],guess:[0,2,15],gzip:0,handl:[0,3,5,11],handler:[0,1,3,4,6,7,9,10,11,12,20,23,24],handshak:[20,21],haproxi:14,harm:15,has:[0,2,5,6,7,17,19,20,22],hash:2,have:[0,1,2,6,14,15,18,22,24],head:[0,3],header:[0,1,2,3,5,6,20,23],hello:[2,9,17,21,23],hello_str:18,help:3,helper:19,here:[1,2,3,5,6,9,12,13,14,22,24],hex:2,hidden:1,high:2,higher:21,hold:[0,2,23],host1:6,host:[2,3,9,17,23],hostnam:[2,3,5],hour:6,how:[2,3,14,22],howev:2,hpr:17,htm:2,html:[2,12],http:[0,4,5,6,7,10,11,12,17,20,23,24],http_author:23,http_cooki:23,http_destin:6,http_error:20,httpbin:[2,3],human:17,iana:21,ico:9,icon:18,identif:23,identifi:[6,15,20],idl:[3,6,14],ids:[15,17],ignor:18,imag:2,img:[2,12],immedi:3,immut:2,implement:[0,3,20],implic:6,implicitli:[0,1],impos:24,improb:15,improv:[6,10,14],inact:[3,6,10,21],incapsul:7,includ:[0,2,7,21],increas:18,indefinit:0,index:[0,2,11,12],individu:3,inflight:3,info:[15,20],inform:[0,14,21,22,23],inherit:1,initi:[18,20],input:[6,9],instal:11,instanc:[1,2,8,17,23],instead:[0,2,20],inted:20,integ:[18,20],integr:10,intention:2,intern:[0,11,14,20,24],internal_error:20,introduc:0,invalid:[0,2,17,20,23],invent:22,isn:3,isol:10,issu:[0,2,3,15,22],item:[7,20],its:17,itself:[6,14,20,22],javascript:[0,19,20,22,24],john:[20,23],join:[19,22],jpg:2,json:[0,2,10,17,18,20,21,22,23],json_body_object:20,json_result_object:20,just:[0,1,2,11,15,20,22],keep:[3,6,7,8,14,19,20],kei:[17,22,23],kept:[2,3],kind:[2,3,15,17,22],know:[2,15],knowledg:14,known:[2,20],kwargs_object:[20,23],languag:2,larg:[2,3,6,21],larger:[6,10],last:[0,3,5,9,18],last_message_count:[17,20,22],last_message_set:18,last_seen_count:[17,20,22],latenc:0,later:[17,20],latest:2,lattic:[0,4,10,11,18,19],ldap:[1,4,7,11],leak:0,least:5,leav:0,length:[2,17,23],lenient:2,less:2,let:14,level:[0,14,21,22],librari:[0,19],like:[0,1,2,15,17,22],limit:[1,2,6,7,10,14],line:[3,19],list:[2,3,5,6,8,10,12,15,19,22],listen:[0,6,8,10,12],liter:6,littl:22,load:[3,11,13],local:[5,6],localhost:[1,5,6,7,9,12],log:[0,5,6,7,20,24],logic:8,login:5,longer:0,look:[1,2,15,22],loos:3,lost:22,lower:2,lowercas:2,lww:18,machin:3,made:23,mai:[0,2,3,5,10,15,17,20,24],main:[1,2,4,7,11],make:[0,2,3,6,10,14],malform:20,mani:[0,3,13,20,22],map:[2,6,9],mark:[2,22],match:[0,2,3,5,7,9,20],max:[2,3,6,8,10,14],maximum:[2,3,6,8,10],mayb:1,mean:[1,2,6,20,22,24],member:5,memori:0,merg:[7,22],messag:[0,2,3,11,17,18,19,21,22,23,24],messsag:17,meta:23,metadata:[20,22,23],method:[0,2,17,21,23],metric:0,mglawica:12,might:[0,2,3,6,18,19,22],million:11,millisecond:15,mime:2,minim:12,minimum:5,minut:[0,17],miss:2,mistak:7,mix:7,mixin:[0,4,6,11],mode:[2,12],modifi:0,more:[0,1,2,3,12,14,19,20,22,24],most:[2,11],mostli:[6,10],mount:7,move:2,multi:19,multipl:[3,5,6,10,20],must:[0,2,3,5,6,17,20,22,23],myapp:3,myimag:2,name:[0,1,2,3,5,6,8,9,17,20,23],namespac:[10,17,20,22],nb9nc:17,need:[6,11,12,21],neg:[18,20],neglig:3,nest:10,network:[1,7],never:[0,2,18],next:[5,6,9,18],nginx:14,nice:7,node:3,non:[2,18,20],none:[0,2],normal:[0,1],note:[0,1,2,3,6,7,10,14,22],notif:21,notifi:23,now:[0,3,15],number:[0,2,3,6,7,8,10,15,18,21,22],obei:[1,6],object:[17,20,23],occasion:0,ofcours:2,offlin:18,offload:14,okai:18,old:[0,2,22],onclos:24,one:[0,1,2,3,6,9,10,12,14,17,22],ones:[0,2,3,6,15,24],onli:[0,1,2,3,6,7,9,14,17,18,22,24],onlin:0,opaqu:15,open:[3,14],ops:13,optim:3,option:[1,2,4,5],order:[2,15,22],org:[1,2,3,5,12],origin:[2,3],other:[0,2,3,6,7,15,17,20,21,22,24],otherth:1,otherwis:2,our:[9,11,15,24],out:2,output:6,over:6,overrid:[0,1,2,3],overridden:0,overriden:1,overrriden:1,own:[3,5,10,22],pad:15,page:[1,2,11,23],pair:17,paramet:[2,21],part:[0,2,5,15,17],particip:[3,5],particlar:2,particular:[0,1,2],pass:[5,6,20,21],password:5,path:[1,2,6,9,12,17,23],pattern:[2,20],payload:[2,10],peer2:8,peer3:8,peer:8,peopl:19,per:[3,6,10,11,14,15],percent:15,perform:[2,6,10],perman:2,pick:5,pictur:14,pipelin:[3,6,10,14],pixel:2,plain:[0,2],plan:17,plenti:10,point:[18,22],poll:14,pool:[0,2,3,4,5,6,7,8,11,24],port:[3,5,6,12,14],posit:[20,23],possibl:[3,6,15,20],post:[14,17,23],potenti:[6,22],power:[11,19],precis:12,prefix:[0,2,7,9,23],presenc:2,present:2,prevent:[1,2,6],previosli:0,previou:6,previous:0,primari:6,principl:3,privat:[0,17,22],privileg:6,prng:15,probabl:0,problem:0,process:[2,3,20],product:2,project:11,propag:[0,20,22,24],properli:0,protect:2,protocol:[0,2,3,6,8,11,19,22],provid:[3,12,15,22,23],provision:5,proxi:[0,1,3,4,5,6,7,9],pub:[10,19,20,21,22],publish:[1,17,20,21],pubsub:19,purpos:[2,20],push:21,put:[2,6,17],python3:19,queri:[2,5],queu:[3,14],queue:[3,14],quick:3,quickli:15,quir:0,quit:11,random:[11,15],rang:0,rate:2,rather:[0,1,2,3],raw:19,reach:[2,22],react:19,read:[1,2,6,22],readabl:17,ready_for_chat:18,real:1,reason:[14,15,24],rebind:0,receiv:[1,2,3,6,17,20,22,23,24],recent:11,reconnect:[8,22],record:[3,5],recoveri:15,redirect:4,ref:6,refer:[7,11,21],referenc:7,regardless:6,regist:[0,18,21],reject:[0,3],rel:2,relat:20,relative_to_domain_root:[2,12],relative_to_rout:2,releas:6,reliabl:22,reload:[0,6],remot:[1,2,20,23],remov:[0,2],render:0,repeat:[6,10],replac:[0,3,23],repli:[20,23],replic:[0,4,11,18,22],replica:0,repo:12,report:24,repositori:[12,19],repres:19,represent:22,request:[0,2,3,5,6,8,9,10,11,13,14,17,21,22,24],request_id:[15,20,23],request_meta:[20,23],requir:[0,1,2,3,8,11,15,20,21],reread:0,reserv:[0,2,17,20,24],resolut:0,resolv:[0,2,3,5],resourc:[6,10],respond:[17,24],respons:[0,2,3,6,21,23],response_meta:20,restart:0,restor:[0,2],result:[5,21,23],retri:[0,8],revalid:2,revis:2,rewrit:[0,3],right:0,roadmap:14,robin:[3,5],robot:2,room1:[17,20,22,23],room2:[17,20,22],room:[10,17,19,20,22,23],root:[2,6],rosolut:9,round:[3,5],roundtrip:3,rout:[0,1,2,4,6,7,10,11,12,21,24],rpc:2,rule:5,run:[3,6,12,15],safe:[3,15],same:[1,8,12,14,17,19,20,22,24],san:3,sane:3,sanic:19,screenshot:11,script:2,search:[2,5,11],sec:[2,3,21],second:[0,17,20],section:[0,1,4,5,7,13,17,22],secur:[6,24],see:[2,3,5,6,15,17,20,21,23,24],seek:3,seen:[17,22],seet:2,semant:18,send:[2,3,6,8,14,21,23],send_messag:[2,20,23],sens:[2,6,10],sent:[2,3,6,17,20,22],separ:[0,2,6],sequenc:15,serd:0,serv:[0,2,6,8,12],server:[0,1,2,3,6,11,14,15,17,20,22,23,24],servic:[2,3,6,7,10],session:[2,3,4,6,7,8,11,20,21,22,24],session_inact:[0,2,23],session_pool_stop:24,set:[0,1,3,6,14,17,18,22],setuid:6,setup:[11,12],share:[17,22],shortag:[6,10],shorter:15,should:[0,2,3,6,10,11,15,20],shouldn:2,show:[2,3,11,17],shutdown:[11,20,21,23],side:[3,17],signal:17,similar:[2,20],simultan:11,sinc:0,singl:[3,4,10,15,21,22,24],singlefil:0,site:[1,2,5],size:[2,3,5,10],skip:2,sleep:[6,8,10],slow:[0,3],slower:3,slowest:6,smaller:[0,3,22],socket:[6,10],some:[0,2,6,10,12,13,15,18,19,20,22,23],somedest:2,someth:[1,2,6,10,22],somethign:1,sometim:[0,1,15],sophist:8,sort:15,sourc:[2,4,12,15],sourceip:1,special:[0,2,8,17],specif:[1,2,5,10,14,21,22,24],specifi:[1,2,3,5,6,7,17],spike:0,split:[2,7],srv:[3,5],stabl:[0,12],stage:2,star:1,start:[0,2,3,6,14,17,20],startup:0,state:19,statu:[0,2,20,21,23,24],status_regist:18,stderr:6,stem:3,step:[5,9,23],still:[0,7,17],stop:[2,3],store:2,str:17,strategi:14,stream:2,strict:2,strictli:2,string:[2,15,17,20,23],strip:[2,5],stripwwwredirect:2,structur:[22,23],studi:19,style:3,sub:[10,19,20,21,22],subdomain:[1,9],subject:6,subpath:2,subprotocol:0,subscrib:[0,17,21,22],subscript:[20,21],subsequ:3,substitut:17,succe:5,success:[17,20],sudo:12,suffix:[2,9,17,22],suit:[3,12],sum:2,summar:22,superior:15,support:[0,1,2,3,4,7,11,17,24],swindon:[1,4,5,6,7,8,10,12,14,15,17,19,20,22,23],swindonchat:[0,2,3,23],swindonlattic:[0,2],sync:[0,8],synchron:[3,15],system:15,tabl:[0,4,6,7,17],tag:7,tail:2,taken:6,tangl:[0,2,20],tangle_cod:20,target:[2,8],task:15,tbd:[6,10],tcp:14,technic:20,tee:12,temporari:24,tempt:10,term:[20,22],test:[2,9,12,17,20],text:[0,2,12,20,22,23],than:[0,1,2,3,6,10],thei:[6,15,17,20],them:[2,10,13,15,20,22],thi:[0,1,2,3,5,6,7,8,10,13,14,15,17,18,20,21,22,23,24],thing:[0,1,2,5,7,19,21],third:20,though:[0,20],thread:[0,3,15],three:[2,5,15],through:2,time:[3,6,8,10,15,17,20,22,24],timeout:[3,6,8,10],timestamp:[15,18],tip:2,token:23,too:[0,2,7,17],top:[20,21],topic:[10,17,20,22],track:[0,3],tradit:14,transact:22,transfer:1,transform:23,treat:[2,15,18],trick:6,trust:12,trusti:12,ttl:0,tupl:20,turn:[2,20],tweak:[0,2],two:[3,6,9,22],txt:2,type:[0,2,3,11,17,21,22,23],uaprom:5,ubuntu:11,ubunturepo:12,uid:5,umbrella:10,unabl:24,unauthor:24,unavail:3,uncach:2,under:10,underli:19,understand:19,uniformli:3,uniqu:15,unless:[1,2],unlik:1,unread:22,unsaf:14,unsubscrib:[0,17],unsupport:[17,20],until:[2,3],unus:0,updat:[0,8,12,17,18,21,22],upgrad:[0,2,3],upstream:[1,6,11,21],uri:20,url:[2,3,9,12,15,17,23],url_querystr:23,use:[2,3,10,15,22],used:[0,1,2,3,6,17,18,20,22,23],useful:[2,3,6,15,21],user:[0,2,5,6,8,15,19,21,22,23],user_id:[0,17,23],user_visits_count:18,userid:17,usernam:[20,23],userpassword:5,uses:[0,2,19,20],using:[0,2,3,5,6,10,12,13,19,24],usual:[2,6,10,15,20,22],utf:[0,2,12],uuid4:15,vagga:11,valid:[2,5,17,18,20,23],valid_topic_valu:17,validation_error:20,valu:[2,3,5,6,10,17,18,20,21,22,23],variabl:[2,17],vector:6,ver:2,verbos:12,veri:[2,3,6,20],verifi:2,version:[1,2,6,11,18],versionedstat:0,via:[7,17,20],view:22,viewpoint:17,visibl:[0,13,22],vulner:24,w0xeqrfippdhxhu0:23,wai:[2,3,13,22],wait:[0,3],want:[2,7,15,19],wasn:0,water:2,web:[1,11,19],websit:5,websocket:[2,10,11,20,21,22],websocketecho:4,well:[0,1,2,3,7,20],were:0,what:[2,15,21],when:[0,2,3,5,6,8,10,15,20,24],whenev:0,where:[0,1,2,5],whether:[3,6],which:[1,2,6,15,17,18,19,20,22],whole:[2,3,5,6],why:[6,15,21],willing:3,win:[0,18],window:0,wish:2,with_hostnam:2,within:[1,9],without:[2,8,17,19],word:17,work:[0,1,2,5,14,18,22],worker:15,world:17,wrap:15,write:[0,18],written:[2,3],wrong:20,www:[2,9],xenial1:12,xenial:12,xml:2,xxx:23,yaml:[7,12],year:[2,15],yes:12,yet:[2,5,6],you:[0,1,2,3,5,6,7,10,12,15,19,22,24],your:[2,3,6,10,15],yyi:23,yyyyi:2,yyyyyi:2},titles:["Swindon Changes By Version","Auth &amp; Auth","Handlers","Http Destinations","Configuration","LDAP Support","Main Configuration","Mixins","Replication configuration","Routing Table","Session Pool","Welcome to Swindon\u2019s documentation!","Installation","Swindon Internals","Load Balancing","Request Id","Swindon Crate docs","Backend API Reference","CRDT Types","Example Applications","Frontend API Reference","Swindon-lattice Protocol","Lattices","Upstream backend requirements","Websocket Shutdown Codes"],titleterms:{"static":2,Using:12,allowal:1,api:[17,20],applic:19,auth:1,author:[1,5,23],backend:[17,22,23],balanc:14,bin:2,call:[20,23],cargo:12,chang:0,client:22,code:[17,24],common:2,complex:22,config:12,configur:[4,6,8],content:12,crate:16,crdt:18,destin:[3,5],doc:16,document:11,doe:22,empti:2,error:20,event:20,exampl:[8,10,12,19,20,22],fatal:20,fatal_error:20,file:2,format:[20,23],frontend:20,gener:[15,23],gif:2,handler:2,hello:20,http:[2,3],inact:23,indic:11,inform:20,instal:12,intern:13,lattic:[2,17,20,21,22],ldap:5,load:14,main:6,messag:20,method:20,mixin:7,notif:23,option:[3,6,8,10],paramet:17,pool:10,propag:15,protocol:21,proxi:2,pub:17,redirect:2,refer:[17,20],replic:8,request:[15,20,23],requir:23,respons:[17,20],result:20,rout:9,section:6,see:22,send:22,session:[10,23],set:2,shutdown:24,singl:2,singlefil:2,sourc:1,specif:17,statu:17,sub:17,subscript:17,support:5,swindon:[0,2,11,13,16,21],tabl:[1,9,11],type:[18,20],ubuntu:12,updat:20,upstream:23,user:[17,20],vagga:12,version:0,versionedstat:2,websocket:[23,24],websocketecho:2,welcom:11,what:22,why:22}})