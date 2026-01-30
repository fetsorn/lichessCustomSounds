chrome.runtime.onMessage.addListener(function (message) {
    if (message.action === "openSettings") {
        var width = 800;
        var height = 600;

        chrome.windows.getCurrent(function (activeWindow) {
            var left = Math.round(activeWindow.left + (activeWindow.width / 2) - (width / 2));
            var top = Math.round(activeWindow.top + (activeWindow.height / 2) - (height / 2));

            chrome.windows.create({
                url: chrome.runtime.getURL("settingsPopup.html"),
                type: "popup",
                width: width,
                height: height,
                left: left,
                top: top
            });
        });
    }
});

function updateDataAndRules(data) {
    console.log("Data received:", data);

    const ruleIdsToRemove = Array.from({ length: 32 }, (_, i) => i + 1);

    chrome.declarativeNetRequest.updateDynamicRules({
        removeRuleIds: ruleIdsToRemove,
        addRules: [
            {
                "id": 1,
                "priority": 1,
                "condition": {
                    "urlFilter": "Berserk*.mp3",
                    "resourceTypes": [
                        "xmlhttprequest"
                    ]
                },
                "action": {
                    "type": "redirect",
                    "redirect": {
                        "url": data.berserk
                    }
                }
            },
            {
                "id": 2,
                "priority": 1,
                "condition": {
                    "urlFilter": "Capture*.mp3",
                    "resourceTypes": [
                        "xmlhttprequest"
                    ]
                },
                "action": {
                    "type": "redirect",
                    "redirect": {
                        "url": data.capture
                    }
                }
            },
            {
                "id": 3,
                "priority": 1,
                "condition": {
                    "urlFilter": "Check*.mp3",
                    "resourceTypes": [
                        "xmlhttprequest"
                    ]
                },
                "action": {
                    "type": "redirect",
                    "redirect": {
                        "url": data.check
                    }
                }
            },
            {
                "id": 4,
                "priority": 1,
                "condition": {
                    "urlFilter": "Confirmation*.mp3",
                    "resourceTypes": [
                        "xmlhttprequest"
                    ]
                },
                "action": {
                    "type": "redirect",
                    "redirect": {
                        "url": data.confirmation
                    }
                }
            },
            {
                "id": 5,
                "priority": 1,
                "condition": {
                    "urlFilter": "CountDown0*.mp3",
                    "resourceTypes": [
                        "xmlhttprequest"
                    ]
                },
                "action": {
                    "type": "redirect",
                    "redirect": {
                        "url": data.countDown0
                    }
                }
            },
            {
                "id": 6,
                "priority": 1,
                "condition": {
                    "urlFilter": "CountDown1*.mp3",
                    "resourceTypes": [
                        "xmlhttprequest"
                    ]
                },
                "action": {
                    "type": "redirect",
                    "redirect": {
                        "url": data.countDown1
                    }
                }
            },
            {
                "id": 7,
                "priority": 1,
                "condition": {
                    "urlFilter": "CountDown2*.mp3",
                    "resourceTypes": [
                        "xmlhttprequest"
                    ]
                },
                "action": {
                    "type": "redirect",
                    "redirect": {
                        "url": data.countDown2
                    }
                }
            },
            {
                "id": 8,
                "priority": 1,
                "condition": {
                    "urlFilter": "CountDown3*.mp3",
                    "resourceTypes": [
                        "xmlhttprequest"
                    ]
                },
                "action": {
                    "type": "redirect",
                    "redirect": {
                        "url": data.countDown3
                    }
                }
            },
            {
                "id": 9,
                "priority": 1,
                "condition": {
                    "urlFilter": "CountDown4*.mp3",
                    "resourceTypes": [
                        "xmlhttprequest"
                    ]
                },
                "action": {
                    "type": "redirect",
                    "redirect": {
                        "url": data.countDown4
                    }
                }
            },
            {
                "id": 10,
                "priority": 1,
                "condition": {
                    "urlFilter": "CountDown5*.mp3",
                    "resourceTypes": [
                        "xmlhttprequest"
                    ]
                },
                "action": {
                    "type": "redirect",
                    "redirect": {
                        "url": data.countDown5
                    }
                }
            },
            {
                "id": 11,
                "priority": 1,
                "condition": {
                    "urlFilter": "CountDown6*.mp3",
                    "resourceTypes": [
                        "xmlhttprequest"
                    ]
                },
                "action": {
                    "type": "redirect",
                    "redirect": {
                        "url": data.countDown6
                    }
                }
            },
            {
                "id": 12,
                "priority": 1,
                "condition": {
                    "urlFilter": "CountDown7*.mp3",
                    "resourceTypes": [
                        "xmlhttprequest"
                    ]
                },
                "action": {
                    "type": "redirect",
                    "redirect": {
                        "url": data.countDown7
                    }
                }
            },
            {
                "id": 13,
                "priority": 1,
                "condition": {
                    "urlFilter": "CountDown8*.mp3",
                    "resourceTypes": [
                        "xmlhttprequest"
                    ]
                },
                "action": {
                    "type": "redirect",
                    "redirect": {
                        "url": data.countDown8
                    }
                }
            },
            {
                "id": 14,
                "priority": 1,
                "condition": {
                    "urlFilter": "CountDown9*.mp3",
                    "resourceTypes": [
                        "xmlhttprequest"
                    ]
                },
                "action": {
                    "type": "redirect",
                    "redirect": {
                        "url": data.countDown9
                    }
                }
            },
            {
                "id": 15,
                "priority": 1,
                "condition": {
                    "urlFilter": "CountDown10*.mp3",
                    "resourceTypes": [
                        "xmlhttprequest"
                    ]
                },
                "action": {
                    "type": "redirect",
                    "redirect": {
                        "url": data.countDown10
                    }
                }
            },
            {
                "id": 16,
                "priority": 1,
                "condition": {
                    "urlFilter": "Defeat*.mp3",
                    "resourceTypes": [
                        "xmlhttprequest"
                    ]
                },
                "action": {
                    "type": "redirect",
                    "redirect": {
                        "url": data.defeat
                    }
                }
            },
            {
                "id": 17,
                "priority": 1,
                "condition": {
                    "urlFilter": "Draw*.mp3",
                    "resourceTypes": [
                        "xmlhttprequest"
                    ]
                },
                "action": {
                    "type": "redirect",
                    "redirect": {
                        "url": data.draw
                    }
                }
            },
            {
                "id": 18,
                "priority": 1,
                "condition": {
                    "urlFilter": "Error*.mp3",
                    "resourceTypes": [
                        "xmlhttprequest"
                    ]
                },
                "action": {
                    "type": "redirect",
                    "redirect": {
                        "url": data.error
                    }
                }
            },
            {
                "id": 19,
                "priority": 1,
                "condition": {
                    "urlFilter": "Explosion*.mp3",
                    "resourceTypes": [
                        "xmlhttprequest"
                    ]
                },
                "action": {
                    "type": "redirect",
                    "redirect": {
                        "url": data.explosion
                    }
                }
            },
            {
                "id": 20,
                "priority": 1,
                "condition": {
                    "urlFilter": "GenericNotify*.mp3",
                    "resourceTypes": [
                        "xmlhttprequest"
                    ]
                },
                "action": {
                    "type": "redirect",
                    "redirect": {
                        "url": data.genericNotify
                    }
                }
            },
            {
                "id": 21,
                "priority": 1,
                "condition": {
                    "urlFilter": "LowTime*.mp3",
                    "resourceTypes": [
                        "xmlhttprequest"
                    ]
                },
                "action": {
                    "type": "redirect",
                    "redirect": {
                        "url": data.lowTime
                    }
                }
            },
            {
                "id": 22,
                "priority": 1,
                "condition": {
                    "urlFilter": "Move*.mp3",
                    "resourceTypes": [
                        "xmlhttprequest"
                    ]
                },
                "action": {
                    "type": "redirect",
                    "redirect": {
                        "url": data.move
                    }
                }
            },
            {
                "id": 23,
                "priority": 1,
                "condition": {
                    "urlFilter": "NewChallenge*.mp3",
                    "resourceTypes": [
                        "xmlhttprequest"
                    ]
                },
                "action": {
                    "type": "redirect",
                    "redirect": {
                        "url": data.newChallenge
                    }
                }
            },
            {
                "id": 24,
                "priority": 1,
                "condition": {
                    "urlFilter": "NewPM*.mp3",
                    "resourceTypes": [
                        "xmlhttprequest"
                    ]
                },
                "action": {
                    "type": "redirect",
                    "redirect": {
                        "url": data.newPM
                    }
                }
            },
            {
                "id": 25,
                "priority": 1,
                "condition": {
                    "urlFilter": "OutOfBound*.mp3",
                    "resourceTypes": [
                        "xmlhttprequest"
                    ]
                },
                "action": {
                    "type": "redirect",
                    "redirect": {
                        "url": data.outOfBound
                    }
                }
            },
            {
                "id": 26,
                "priority": 1,
                "condition": {
                    "urlFilter": "Select*.mp3",
                    "resourceTypes": [
                        "xmlhttprequest"
                    ]
                },
                "action": {
                    "type": "redirect",
                    "redirect": {
                        "url": data.select
                    }
                }
            },
            {
                "id": 27,
                "priority": 1,
                "condition": {
                    "urlFilter": "SocialNotify*.mp3",
                    "resourceTypes": [
                        "xmlhttprequest"
                    ]
                },
                "action": {
                    "type": "redirect",
                    "redirect": {
                        "url": data.socialNotify
                    }
                }
            },
            {
                "id": 28,
                "priority": 1,
                "condition": {
                    "urlFilter": "Tournament1st*.mp3",
                    "resourceTypes": [
                        "xmlhttprequest"
                    ]
                },
                "action": {
                    "type": "redirect",
                    "redirect": {
                        "url": data.tournament1st
                    }
                }
            },
            {
                "id": 29,
                "priority": 1,
                "condition": {
                    "urlFilter": "Tournament2nd*.mp3",
                    "resourceTypes": [
                        "xmlhttprequest"
                    ]
                },
                "action": {
                    "type": "redirect",
                    "redirect": {
                        "url": data.tournament2nd
                    }
                }
            },
            {
                "id": 30,
                "priority": 1,
                "condition": {
                    "urlFilter": "Tournament3rd*.mp3",
                    "resourceTypes": [
                        "xmlhttprequest"
                    ]
                },
                "action": {
                    "type": "redirect",
                    "redirect": {
                        "url": data.tournament3rd
                    }
                }
            },
            {
                "id": 31,
                "priority": 1,
                "condition": {
                    "urlFilter": "TournamentOther*.mp3",
                    "resourceTypes": [
                        "xmlhttprequest"
                    ]
                },
                "action": {
                    "type": "redirect",
                    "redirect": {
                        "url": data.tournamentOther
                    }
                }
            },
            {
                "id": 32,
                "priority": 1,
                "condition": {
                    "urlFilter": "Victory*.mp3",
                    "resourceTypes": [
                        "xmlhttprequest"
                    ]
                },
                "action": {
                    "type": "redirect",
                    "redirect": {
                        "url": data.victory
                    }
                }
            }
        ],
    });
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    const data = request.data;

    chrome.storage.local.set({ data }, () => {
        console.log('Data saved');
        updateDataAndRules(data);
        sendResponse('Data received and saved');
    });

    return true;
});

chrome.storage.local.get('data', ({ data }) => {
    console.log("Stored data:", data);
    updateDataAndRules(data);
});
