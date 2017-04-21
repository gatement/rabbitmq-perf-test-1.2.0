[
//// 1 producer, 1 consumer, max rate
//  {'name':      'mytest1',
//   'type':      'simple',
//   'params':    [{'time-limit':     600,
//                  'producer-count': 1,
//                  'consumer-count': 1,
//                  'min-msg-size': 500,
//                  'predeclared': true,
//                  'auto-ack': false,
//                  'consumer-prefetch': 50,
//                  'exchange-name': 'amq.topic'
//                 }]},

//// high waterwark test
//  {'name':      'mytest2',
//   'type':      'simple',
//   'params':    [{'time-limit':     300,
//                  'producer-count': 10,
//                  'consumer-count': 1,
//                  'min-msg-size': 500,
//                  'predeclared': true,
//                  'auto-ack': false,
//                  'consumer-prefetch': 50,
//                  'exchange-name': 'amq.topic'
//                 }]},

//// rate vs latency test1
//  {'name':      'mytest3',
//   'type':      'rate-vs-latency',
//   'params':    [{'time-limit':     60,
//                  'producer-count': 1,
//                  'consumer-count': 5,
//                  'min-msg-size': 500,
//                  'predeclared': true,
//                  'auto-ack': false,
//                  'consumer-prefetch': 50,
//                  'exchange-name': 'amq.topic'
//                 }]},

//// rate vs latency test2
//  {'name':      'mytest4',
//   'type':      'rate-vs-latency',
//   'params':    [{'time-limit':     60,
//                  'producer-count': 1,
//                  'consumer-count': 100,
//                  'min-msg-size': 500,
//                  'predeclared': true,
//                  'auto-ack': false,
//                  'consumer-prefetch': 10,
//                  'queue-names': ['mytest'],
//                  'exchange-name': 'amq.topic'
//                 }]},

//// vary msg size
  {'name':      'mytest5',
   'type':      'varying',
   'params':    [{'time-limit':     60,
                  'producer-count': 1,
                  'consumer-count': 10,
                  'predeclared': true,
                  'auto-ack': false,
                  'consumer-prefetch': 10,
                  'queue-names': ['mytest'],
                  'exchange-name': 'amq.topic'
                }],
   'variables': [{'name':   'min-msg-size',
                  'values': [300, 500, 1000, 3000, 5000, 10000]}
                ]}

//// vary msg size and producers
//  {'name':      'mytest6',
//   'type':      'varying',
//   'params':    [{'time-limit':     60,
//                  'producer-count': 1,
//                  'predeclared': true,
//                  'auto-ack': false,
//                  'consumer-prefetch': 10,
//                  'queue-names': ['mytest'],
//                  'exchange-name': 'amq.topic'
//                }],
//   'variables': [{'name':   'min-msg-size',
//                  'values': [300, 500, 1000, 3000, 5000, 10000]}
//                 {'name':   'consumer-count',
//                  'values': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
//                ]}
]
