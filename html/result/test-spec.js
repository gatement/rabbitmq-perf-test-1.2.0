[
//// simple test
//  {'name':      'mytest1',
//   'type':      'simple',
//   'params':    [{'time-limit':     600,
//                  'producer-count': 1,
//                  'consumer-count': 2,
//                  'min-msg-size': 200,
//                  'predeclared': true,
//                  'exchange-name': 'amq.topic'
//                 }]},

//// high waterwark test
//  {'name':      'mytest2',
//   'type':      'simple',
//   'params':    [{'time-limit':     600,
//                  'producer-count': 3,
//                  'consumer-count': 1,
//                  'min-msg-size': 200,
//                  'predeclared': true,
//                  'exchange-name': 'amq.topic'
//                 }]},

//// rate vs latency test
//  {'name':      'mytest3',
//   'type':      'rate-vs-latency',
//   'params':    [{'time-limit':     60,
//                  'producer-count': 1,
//                  'consumer-count': 1,
//                  'min-msg-size': 200,
//                  'predeclared': true,
//                  'exchange-name': 'amq.topic'
//                 }]},

//// rate vs latency test
  {'name':      'mytest4',
   'type':      'rate-vs-latency',
   'params':    [{'time-limit':     60,
                  'producer-count': 1,
                  'consumer-count': 1,
                  'min-msg-size': 200,
                  'predeclared': true,
                  'exchange-name': 'amq.topic'
                 }]}
]
