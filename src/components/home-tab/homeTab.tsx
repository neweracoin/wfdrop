import React, { useCallback, useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import logoBig from "../../assets/img/logobig.png";
//import logoSm from "../../assets/img/logosm.svg";

import Footer from "../footer";
import { useEffect, useState } from "react";
import { toast } from 'react-hot-toast';
import axios from 'axios';
import BottomSheet from '../BottomSheet';
import CountdownTimer from '../CountdownTimer';



const HomeTab = () => {
    // Cache sessionStorage values

    const [totalPoints, setTotalPoints] = useState(0);
    const [socialTasks, setSocialTasks] = useState<any>([]);
    const [dailyLoginTasks, setDailyLoginTasks] = useState<any>([]);
    //const [engageTask, setEngageTask] = useState(false);

    const [engageTwoFrens, setEngageTwoFrens] = useState(false);
    const [engageFiveFrens, setEngageFiveFrens] = useState(false);
    const [engageTenFrens, setEngageTenFrens] = useState(false);
    const [engageTwentyFrens, setEngageTwentyFrens] = useState(false);
    const [engageThirtyFrens, setEngageThirtyFrens] = useState(false);
    const [engageRepost, setEngageRepost] = useState(false);
    const [engageTelegram, setEngageTelegram] = useState(false);
    const [engageFollow, setEngageFollow] = useState(false);
    //const [engageFollowBirds, setEngageFollowBirds] = useState(false);
    const [engageYoutube, setEngageYoutube] = useState(false);
    //const [engageYoutubeBirds, setEngageYoutubeBirds] = useState(false);
    //const [engagePlayBirds, setEngagePlayBirds] = useState(false);
    const [engageInstagram, setEngageInstagram] = useState(false);
    const [engageYtVidOne, setEngageYtVidOne] = useState(false);
    const [engageRtTagThreeFrensFive, setEngageRtTagThreeFrensFive] = useState(false);
    const [engageInviteTomarket, setEngageInviteToMarket] = useState(false);
    const [engageToMarketGift, setEngageToMarketGift] = useState(false);
    const [engageJoinGoats, setEngageJoinGoats] = useState(false);
    //const [engageJoinTonAi, setEngageJoinTonAi] = useState(false);
    const [engageYtVidTwo, setEngageYtVidTwo] = useState(false);
    const [engageHoldCoin, setEngageHoldCoin] = useState(false);
    const [engageHoldCoinChannel, setEngageHoldCoinChannel] = useState(false);
    const [engageYtVidThree, setEngageYtVidThree] = useState(false);
    const [engageYtVidFour, setEngageYtVidFour] = useState(false);
    //const [engagePigsBot, setEngagePigsBot] = useState(false);
    //const [engagePigsChannel, setEngagePigsChannel] = useState(false);
    //const [engageTonPartyBot, setEngageTonPartyBot] = useState(false);
    //const [engageTonPartyChannel, setEngageTonPartyChannel] = useState(false);
    const [tgDisabled, setTgDisabled] = useState(false);
    const [repostDisabled, setRepostDisabled] = useState(false);
    const [twoFrensDisabled, setTwoFrensDisabled] = useState(false);
    const [fiveFrensDisabled, setFiveFrensDisabled] = useState(false);
    const [tenFrensDisabled, setTenFrensDisabled] = useState(false);
    const [twentyFrensDisabled, setTwentyFrensDisabled] = useState(false);
    const [thirtyFrensDisabled, setThirtyFrensDisabled] = useState(false);
    const [rtTagThreeFrensFiveDisabled, setRtTagThreeFrensFiveDisabled] = useState(false);
    const [toMarketGiftDisabled, setToMarketGiftDisabled] = useState(false);
    const [inviteTomarketDisabled, setInviteTomarketDisabled] = useState(false);
    const [followDisabled, setFollowDisabled] = useState(false);
    //const [followBirdsDisabled, setFollowBirdsDisabled] = useState(false);
    const [youtubeDisabled, setYoutubeDisabled] = useState(false);
    //const [youtubeBirdsDisabled, setYoutubeBirdsDisabled] = useState(false);
    //const [playBirdsDisabled, setPlayBirdsDisabled] = useState(false);
    const [instagramDisabled, setInstagramDisabled] = useState(false);
    const [ytVidOneDisabled, setYtVidOneDisabled] = useState(false);
    const [ytVidTwoDisabled, setYtVidTwoDisabled] = useState(false);
    const [ytVidThreeDisabled, setYtVidThreeDisabled] = useState(false);
    const [ytVidFourDisabled, setYtVidFourDisabled] = useState(false);
    const [joinGoatsDisabled, setJoinGoatsDisabled] = useState(false);
    //const [joinTonAiDisabled, setJoinTonAiDisabled] = useState(false);
    const [holdCoinDisabled, setHoldCoinDisabled] = useState(false);
    const [holdCoinChannelDisabled, setHoldCoinChannelDisabled] = useState(false);
    //const [pigsBotDisabled, setPigsBotDisabled] = useState(false);
    //const [pigsChannelDisabled, setPigsChannelDisabled] = useState(false);
    //const [tonPartyBotDisabled, setTonPartyBotDisabled] = useState(false);
    //const [tonPartyChannelDisabled, setTonPartyChannelDisabled] = useState(false);
    const [tgStart, setTgStart] = useState(true);
    const [tgClaim, setTgClaim] = useState(false);
    const [referralCode, setReferralCode] = useState('');
    const [pointsToday, setPointsToday] = useState(0);

    const [referees, setReferees] = useState(0);
    const [open, setOpenModal] = useState<boolean>(false);
    //const [openBirds, setOpenModalBirds] = useState<boolean>(false);
    const [isBottomSheetOpen, setBottomSheetOpen] = useState(false);

    const handleOpenBottomSheet = () => {
        setBottomSheetOpen(true);
    };

    const handleCloseBottomSheet = () => {
        setBottomSheetOpen(false);
    };

    const openTg = () => {
        window.open("https://t.me/aidogs_community", "_blank");
    };

    const openTwitter = (e: React.MouseEvent) => {
        e.preventDefault();
        window.open("https://x.com/aidogscomm", "_blank");

    };

    const claimTg = async () => {
        setTgDisabled(true)
        const points = 150;
        const updatePoints = await axios.post(`${import.meta.env.VITE_APP_URL}/update-task-points`, {
            pointsNo: points,
            user
        })

        const updateSocial = await axios.post(`${import.meta.env.VITE_APP_URL}/update-social-reward`, {
            claimTreshold: 'telegram',
            user
        })

        if (updatePoints?.data?.success && updateSocial?.data?.success)  {
            toast("Claimed successfully", {
                className: "",
                duration: 799,
                style: {
                  background: "#363636",
                  color: "#fff",
                },
            });
            setTotalPoints(updatePoints?.data?.userData?.pointsNo);
            setPointsToday(updatePoints?.data?.userData?.pointsToday);
            setSocialTasks(updateSocial?.data?.userData?.socialRewardDeets);
            setDailyLoginTasks(updatePoints?.data?.userData?.referralRewardDeets);
            setReferees(updatePoints?.data?.userData?.referralPoints);
            setTgDisabled(false);
        }
    };
    
    const claimFollow = async () => {
        setFollowDisabled(true)
        const points = 150;
        const updatePoints = await axios.post(`${import.meta.env.VITE_APP_URL}/update-task-points`, {
            pointsNo: points,
            user
        })

        const updateSocial = await axios.post(`${import.meta.env.VITE_APP_URL}/update-social-reward`, {
            claimTreshold: 'follow',
            user
        })

        if (updatePoints?.data?.success && updateSocial?.data?.success)  {
            toast("Claimed successfully", {
                className: "",
                duration: 799,
                style: {
                  background: "#363636",
                  color: "#fff",
                },
            });
            setTotalPoints(updatePoints?.data?.userData?.pointsNo);
            setPointsToday(updatePoints?.data?.userData?.pointsToday);
            setSocialTasks(updateSocial?.data?.userData?.socialRewardDeets);
            setDailyLoginTasks(updatePoints?.data?.userData?.referralRewardDeets);
            setReferees(updatePoints?.data?.userData?.referralPoints);
            setFollowDisabled(false);
        }
    };

    const claimShare = async () => {
        setRepostDisabled(true);
        const points = 150;
        const updatePoints = await axios.post(`${import.meta.env.VITE_APP_URL}/update-task-points`, {
            pointsNo: points,
            user
        })

        const updateSocial = await axios.post(`${import.meta.env.VITE_APP_URL}/update-social-reward`, {
            claimTreshold: 'repost',
            user
        })

        if (updatePoints?.data?.success && updateSocial?.data?.success)  {
            toast("Claimed successfully", {
                className: "",
                duration: 799,
                style: {
                  background: "#363636",
                  color: "#fff",
                },
            });
            setTotalPoints(updatePoints?.data?.userData?.pointsNo);
            setPointsToday(updatePoints?.data?.userData?.pointsToday);
            setSocialTasks(updateSocial?.data?.userData?.socialRewardDeets);
            setDailyLoginTasks(updatePoints?.data?.userData?.referralRewardDeets);
            setReferees(updatePoints?.data?.userData?.referralPoints);
            setRepostDisabled(false);
        }
    };


    const claimInsta = async () => {
        setInstagramDisabled(true)
        const points = 150;
        const updatePoints = await axios.post(`${import.meta.env.VITE_APP_URL}/update-task-points`, {
            pointsNo: points,
            user
        })

        const updateSocial = await axios.post(`${import.meta.env.VITE_APP_URL}/update-social-reward`, {
            claimTreshold: 'instagram',
            user
        })

        if (updatePoints?.data?.success && updateSocial?.data?.success)  {
            toast("Claimed successfully", {
                className: "",
                duration: 799,
                style: {
                  background: "#363636",
                  color: "#fff",
                },
            });
            setTotalPoints(updatePoints?.data?.userData?.pointsNo);
            setPointsToday(updatePoints?.data?.userData?.pointsToday);
            setSocialTasks(updateSocial?.data?.userData?.socialRewardDeets);
            setDailyLoginTasks(updatePoints?.data?.userData?.referralRewardDeets);
            setReferees(updatePoints?.data?.userData?.referralPoints);
            setInstagramDisabled(false);
        }        
    }

    const claimYoutube = async () => {
        setYoutubeDisabled(true)
        const points = 150;
        const updatePoints = await axios.post(`${import.meta.env.VITE_APP_URL}/update-task-points`, {
            pointsNo: points,
            user
        })

        const updateSocial = await axios.post(`${import.meta.env.VITE_APP_URL}/update-social-reward`, {
            claimTreshold: 'youtube',
            user
        })

        if (updatePoints?.data?.success && updateSocial?.data?.success)  {
            toast("Claimed successfully", {
                className: "",
                duration: 799,
                style: {
                  background: "#363636",
                  color: "#fff",
                },
            });
            setTotalPoints(updatePoints?.data?.userData?.pointsNo);
            setPointsToday(updatePoints?.data?.userData?.pointsToday);
            setSocialTasks(updateSocial?.data?.userData?.socialRewardDeets);
            setDailyLoginTasks(updatePoints?.data?.userData?.referralRewardDeets);
            setReferees(updatePoints?.data?.userData?.referralPoints);
            setYoutubeDisabled(false)
        }
    }
  
    const claimTwoFrens = async () => {
        setTwoFrensDisabled(true)
        const getUserData = await axios.post(`${import.meta.env.VITE_APP_URL}/get-user-data`, {user});
        const referralPoints = getUserData?.data?.userData?.referralPoints

        if (referralPoints >= 2) {
            const points = 2000;
            const updatePoints = await axios.post(`${import.meta.env.VITE_APP_URL}/update-task-points`, {
                pointsNo: points,
                user
            })

            const updateSocial = await axios.post(`${import.meta.env.VITE_APP_URL}/update-social-reward`, {
                claimTreshold: 'two-frens',
                user
            })

            if (updatePoints?.data?.success && updateSocial?.data?.success)  {
                toast("Claimed successfully", {
                    className: "",
                    duration: 799,
                    style: {
                    background: "#363636",
                    color: "#fff",
                    },
                });
                setTotalPoints(updatePoints?.data?.userData?.pointsNo);
                setPointsToday(updatePoints?.data?.userData?.pointsToday);
                setSocialTasks(updateSocial?.data?.userData?.socialRewardDeets);
                setDailyLoginTasks(updatePoints?.data?.userData?.referralRewardDeets);
                setReferees(updatePoints?.data?.userData?.referralPoints);
                setTwoFrensDisabled(false);
            }
        } else {
            toast("You need at least two referrals to claim", {
                className: "",
                duration: 799,
                style: {
                background: "#363636",
                color: "#fff",
                },
            });
        }
    };

    const claimFiveFrens = async () => {
        setFiveFrensDisabled(true)
        const getUserData = await axios.post(`${import.meta.env.VITE_APP_URL}/get-user-data`, {user});
        const referralPoints = getUserData?.data?.userData?.referralPoints

        if (referralPoints >= 5) {
            const points = 5000;
            const updatePoints = await axios.post(`${import.meta.env.VITE_APP_URL}/update-task-points`, {
                pointsNo: points,
                user
            })

            const updateSocial = await axios.post(`${import.meta.env.VITE_APP_URL}/update-social-reward`, {
                claimTreshold: 'five-frens',
                user
            })

            if (updatePoints?.data?.success && updateSocial?.data?.success)  {
                toast("Claimed successfully", {
                    className: "",
                    duration: 799,
                    style: {
                    background: "#363636",
                    color: "#fff",
                    },
                });
                setTotalPoints(updatePoints?.data?.userData?.pointsNo);
                setPointsToday(updatePoints?.data?.userData?.pointsToday);
                setSocialTasks(updateSocial?.data?.userData?.socialRewardDeets);
                setDailyLoginTasks(updatePoints?.data?.userData?.referralRewardDeets);
                setReferees(updatePoints?.data?.userData?.referralPoints);
                setFiveFrensDisabled(false);
            }
        } else {
            toast("You need at least five referrals to claim", {
                className: "",
                duration: 799,
                style: {
                background: "#363636",
                color: "#fff",
                },
            });
        }
    };

    const claimTenFrens = async () => {
        setTenFrensDisabled(true)
        const getUserData = await axios.post(`${import.meta.env.VITE_APP_URL}/get-user-data`, {user});
        const referralPoints = getUserData?.data?.userData?.referralPoints

        if (referralPoints >= 10) {
            const points = 10000;
            const updatePoints = await axios.post(`${import.meta.env.VITE_APP_URL}/update-task-points`, {
                pointsNo: points,
                user
            })

            const updateSocial = await axios.post(`${import.meta.env.VITE_APP_URL}/update-social-reward`, {
                claimTreshold: 'ten-frens',
                user
            })

            if (updatePoints?.data?.success && updateSocial?.data?.success)  {
                toast("Claimed successfully", {
                    className: "",
                    duration: 799,
                    style: {
                    background: "#363636",
                    color: "#fff",
                    },
                });
                setTotalPoints(updatePoints?.data?.userData?.pointsNo);
                setPointsToday(updatePoints?.data?.userData?.pointsToday);
                setSocialTasks(updateSocial?.data?.userData?.socialRewardDeets);
                setDailyLoginTasks(updatePoints?.data?.userData?.referralRewardDeets);
                setReferees(updatePoints?.data?.userData?.referralPoints);
                setTenFrensDisabled(false);
            }
        } else {
            toast("You need at least ten referrals to claim", {
                className: "",
                duration: 799,
                style: {
                background: "#363636",
                color: "#fff",
                },
            });
        }
    };

    const claimTwentyFrens = async () => {
        setTwentyFrensDisabled(true)
        const getUserData = await axios.post(`${import.meta.env.VITE_APP_URL}/get-user-data`, {user});
        const referralPoints = getUserData?.data?.userData?.referralPoints

        if (referralPoints >= 20) {
            const points = 20000;
            const updatePoints = await axios.post(`${import.meta.env.VITE_APP_URL}/update-task-points`, {
                pointsNo: points,
                user
            })

            const updateSocial = await axios.post(`${import.meta.env.VITE_APP_URL}/update-social-reward`, {
                claimTreshold: 'twenty-frens',
                user
            })

            if (updatePoints?.data?.success && updateSocial?.data?.success)  {
                toast("Claimed successfully", {
                    className: "",
                    duration: 799,
                    style: {
                    background: "#363636",
                    color: "#fff",
                    },
                });
                setTotalPoints(updatePoints?.data?.userData?.pointsNo);
                setPointsToday(updatePoints?.data?.userData?.pointsToday);
                setSocialTasks(updateSocial?.data?.userData?.socialRewardDeets);
                setDailyLoginTasks(updatePoints?.data?.userData?.referralRewardDeets);
                setReferees(updatePoints?.data?.userData?.referralPoints);
                setTwentyFrensDisabled(false);
            }
        } else {
            toast("You need at least twenty referrals to claim", {
                className: "",
                duration: 799,
                style: {
                background: "#363636",
                color: "#fff",
                },
            });
        }
    };

    const claimThirtyFrens = async () => {
        setThirtyFrensDisabled(true)
        const getUserData = await axios.post(`${import.meta.env.VITE_APP_URL}/get-user-data`, {user});
        const referralPoints = getUserData?.data?.userData?.referralPoints

        if (referralPoints >= 30) {
            const points = 30000;
            const updatePoints = await axios.post(`${import.meta.env.VITE_APP_URL}/update-task-points`, {
                pointsNo: points,
                user
            })

            const updateSocial = await axios.post(`${import.meta.env.VITE_APP_URL}/update-social-reward`, {
                claimTreshold: 'thirty-frens',
                user
            })

            if (updatePoints?.data?.success && updateSocial?.data?.success)  {
                toast("Claimed successfully", {
                    className: "",
                    duration: 799,
                    style: {
                    background: "#363636",
                    color: "#fff",
                    },
                });
                setTotalPoints(updatePoints?.data?.userData?.pointsNo);
                setPointsToday(updatePoints?.data?.userData?.pointsToday);
                setSocialTasks(updateSocial?.data?.userData?.socialRewardDeets);
                setDailyLoginTasks(updatePoints?.data?.userData?.referralRewardDeets);
                setReferees(updatePoints?.data?.userData?.referralPoints);
                setThirtyFrensDisabled(false);
            }
        } else {
            toast("You need at least thirty referrals to claim", {
                className: "",
                duration: 799,
                style: {
                background: "#363636",
                color: "#fff",
                },
            });
        }
    };

    const claimYtVidOne = async () => {
        setYtVidOneDisabled(true)
        const points = 1000;
        const updatePoints = await axios.post(`${import.meta.env.VITE_APP_URL}/update-task-points`, {
            pointsNo: points,
            user
        })

        const updateSocial = await axios.post(`${import.meta.env.VITE_APP_URL}/update-social-reward`, {
            claimTreshold: 'yt-vid-one',
            user
        })

        if (updatePoints?.data?.success && updateSocial?.data?.success)  {
            toast("Claimed successfully", {
                className: "",
                duration: 799,
                style: {
                  background: "#363636",
                  color: "#fff",
                },
            });
            setTotalPoints(updatePoints?.data?.userData?.pointsNo);
            setPointsToday(updatePoints?.data?.userData?.pointsToday);
            setSocialTasks(updateSocial?.data?.userData?.socialRewardDeets);
            setDailyLoginTasks(updatePoints?.data?.userData?.referralRewardDeets);
            setReferees(updatePoints?.data?.userData?.referralPoints);
            setYtVidOneDisabled(false)
        }
    }

    const claimRtTagThreeFrensFive = async () => {
        setRtTagThreeFrensFiveDisabled(true);
        const points = 150;
        const updatePoints = await axios.post(`${import.meta.env.VITE_APP_URL}/update-task-points`, {
            pointsNo: points,
            user
        })

        const updateSocial = await axios.post(`${import.meta.env.VITE_APP_URL}/update-social-reward`, {
            claimTreshold: 'rt-tag-three-frens-five',
            user
        })

        if (updatePoints?.data?.success && updateSocial?.data?.success)  {
            toast("Claimed successfully", {
                className: "",
                duration: 799,
                style: {
                  background: "#363636",
                  color: "#fff",
                },
            });
            setTotalPoints(updatePoints?.data?.userData?.pointsNo);
            setPointsToday(updatePoints?.data?.userData?.pointsToday);
            setSocialTasks(updateSocial?.data?.userData?.socialRewardDeets);
            setDailyLoginTasks(updatePoints?.data?.userData?.referralRewardDeets);
            setReferees(updatePoints?.data?.userData?.referralPoints);
            setRtTagThreeFrensFiveDisabled(false);
        }
    };

    const claimToMarket = async () => {
        setToMarketGiftDisabled(true);
        const points = 2000;
        const updatePoints = await axios.post(`${import.meta.env.VITE_APP_URL}/update-task-points`, {
            pointsNo: points,
            user
        })

        const updateSocial = await axios.post(`${import.meta.env.VITE_APP_URL}/update-social-reward`, {
            claimTreshold: 'gift-for-tomarket',
            user
        })

        if (updatePoints?.data?.success && updateSocial?.data?.success)  {
            toast("Claimed successfully", {
                className: "",
                duration: 799,
                style: {
                  background: "#363636",
                  color: "#fff",
                },
            });
            setTotalPoints(updatePoints?.data?.userData?.pointsNo);
            setPointsToday(updatePoints?.data?.userData?.pointsToday);
            setSocialTasks(updateSocial?.data?.userData?.socialRewardDeets);
            setDailyLoginTasks(updatePoints?.data?.userData?.referralRewardDeets);
            setReferees(updatePoints?.data?.userData?.referralPoints);
            setToMarketGiftDisabled(false);
        }
    };

    const claimInviteToMarket = async () => {
        setInviteTomarketDisabled(true);
        const points = 150;
        const updatePoints = await axios.post(`${import.meta.env.VITE_APP_URL}/update-task-points`, {
            pointsNo: points,
            user
        })

        const updateSocial = await axios.post(`${import.meta.env.VITE_APP_URL}/update-social-reward`, {
            claimTreshold: 'invite-url-tomarket',
            user
        })

        if (updatePoints?.data?.success && updateSocial?.data?.success)  {
            toast("Claimed successfully", {
                className: "",
                duration: 799,
                style: {
                  background: "#363636",
                  color: "#fff",
                },
            });
            setTotalPoints(updatePoints?.data?.userData?.pointsNo);
            setPointsToday(updatePoints?.data?.userData?.pointsToday);
            setSocialTasks(updateSocial?.data?.userData?.socialRewardDeets);
            setDailyLoginTasks(updatePoints?.data?.userData?.referralRewardDeets);
            setReferees(updatePoints?.data?.userData?.referralPoints);
            setInviteTomarketDisabled(false);
        }
    };
    
    const claimJoinGoats = async () => {
        setJoinGoatsDisabled(true)
        const points = 2000;
        const updatePoints = await axios.post(`${import.meta.env.VITE_APP_URL}/update-task-points`, {
            pointsNo: points,
            user
        })

        const updateSocial = await axios.post(`${import.meta.env.VITE_APP_URL}/update-social-reward`, {
            claimTreshold: 'join-goats',
            user
        })

        if (updatePoints?.data?.success && updateSocial?.data?.success)  {
            toast("Claimed successfully", {
                className: "",
                duration: 799,
                style: {
                  background: "#363636",
                  color: "#fff",
                },
            });
            setTotalPoints(updatePoints?.data?.userData?.pointsNo);
            setPointsToday(updatePoints?.data?.userData?.pointsToday);
            setSocialTasks(updateSocial?.data?.userData?.socialRewardDeets);
            setDailyLoginTasks(updatePoints?.data?.userData?.referralRewardDeets);
            setReferees(updatePoints?.data?.userData?.referralPoints);
            setJoinGoatsDisabled(false);
        }
    };

    const claimHoldCoin = async () => {
        setHoldCoinDisabled(true)
        const points = 2000;
        const updatePoints = await axios.post(`${import.meta.env.VITE_APP_URL}/update-task-points`, {
            pointsNo: points,
            user
        })

        const updateSocial = await axios.post(`${import.meta.env.VITE_APP_URL}/update-social-reward`, {
            claimTreshold: 'hold-coin-bot',
            user
        })

        if (updatePoints?.data?.success && updateSocial?.data?.success)  {
            toast("Claimed successfully", {
                className: "",
                duration: 799,
                style: {
                  background: "#363636",
                  color: "#fff",
                },
            });
            setTotalPoints(updatePoints?.data?.userData?.pointsNo);
            setPointsToday(updatePoints?.data?.userData?.pointsToday);
            setSocialTasks(updateSocial?.data?.userData?.socialRewardDeets);
            setDailyLoginTasks(updatePoints?.data?.userData?.referralRewardDeets);
            setReferees(updatePoints?.data?.userData?.referralPoints);
            setHoldCoinDisabled(false);
        }
    };

    const claimHoldCoinChannel = async () => {
        setHoldCoinChannelDisabled(true)
        const points = 150;
        const updatePoints = await axios.post(`${import.meta.env.VITE_APP_URL}/update-task-points`, {
            pointsNo: points,
            user
        })

        const updateSocial = await axios.post(`${import.meta.env.VITE_APP_URL}/update-social-reward`, {
            claimTreshold: 'hold-coin-channel',
            user
        })

        if (updatePoints?.data?.success && updateSocial?.data?.success)  {
            toast("Claimed successfully", {
                className: "",
                duration: 799,
                style: {
                  background: "#363636",
                  color: "#fff",
                },
            });
            setTotalPoints(updatePoints?.data?.userData?.pointsNo);
            setPointsToday(updatePoints?.data?.userData?.pointsToday);
            setSocialTasks(updateSocial?.data?.userData?.socialRewardDeets);
            setDailyLoginTasks(updatePoints?.data?.userData?.referralRewardDeets);
            setReferees(updatePoints?.data?.userData?.referralPoints);
            setHoldCoinChannelDisabled(false);
        }
    };

    const claimYtVidTwo = async () => {
        setYtVidTwoDisabled(true)
        const points = 1000;
        const updatePoints = await axios.post(`${import.meta.env.VITE_APP_URL}/update-task-points`, {
            pointsNo: points,
            user
        })

        const updateSocial = await axios.post(`${import.meta.env.VITE_APP_URL}/update-social-reward`, {
            claimTreshold: 'yt-vid-two',
            user
        })

        if (updatePoints?.data?.success && updateSocial?.data?.success)  {
            toast("Claimed successfully", {
                className: "",
                duration: 799,
                style: {
                  background: "#363636",
                  color: "#fff",
                },
            });
            setTotalPoints(updatePoints?.data?.userData?.pointsNo);
            setPointsToday(updatePoints?.data?.userData?.pointsToday);
            setSocialTasks(updateSocial?.data?.userData?.socialRewardDeets);
            setDailyLoginTasks(updatePoints?.data?.userData?.referralRewardDeets);
            setReferees(updatePoints?.data?.userData?.referralPoints);
            setYtVidTwoDisabled(false)
        }
    }

    const claimYtVidThree = async () => {
        setYtVidThreeDisabled(true)
        const points = 1000;
        const updatePoints = await axios.post(`${import.meta.env.VITE_APP_URL}/update-task-points`, {
            pointsNo: points,
            user
        })

        const updateSocial = await axios.post(`${import.meta.env.VITE_APP_URL}/update-social-reward`, {
            claimTreshold: 'yt-vid-three',
            user
        })

        if (updatePoints?.data?.success && updateSocial?.data?.success)  {
            toast("Claimed successfully", {
                className: "",
                duration: 799,
                style: {
                  background: "#363636",
                  color: "#fff",
                },
            });
            setTotalPoints(updatePoints?.data?.userData?.pointsNo);
            setPointsToday(updatePoints?.data?.userData?.pointsToday);
            setSocialTasks(updateSocial?.data?.userData?.socialRewardDeets);
            setDailyLoginTasks(updatePoints?.data?.userData?.referralRewardDeets);
            setReferees(updatePoints?.data?.userData?.referralPoints);
            setYtVidThreeDisabled(false)
        }
    }

    const claimYtVidFour = async () => {
        setYtVidFourDisabled(true)
        const points = 1000;
        const updatePoints = await axios.post(`${import.meta.env.VITE_APP_URL}/update-task-points`, {
            pointsNo: points,
            user
        })

        const updateSocial = await axios.post(`${import.meta.env.VITE_APP_URL}/update-social-reward`, {
            claimTreshold: 'yt-vid-four',
            user
        })

        if (updatePoints?.data?.success && updateSocial?.data?.success)  {
            toast("Claimed successfully", {
                className: "",
                duration: 799,
                style: {
                  background: "#363636",
                  color: "#fff",
                },
            });
            setTotalPoints(updatePoints?.data?.userData?.pointsNo);
            setPointsToday(updatePoints?.data?.userData?.pointsToday);
            setSocialTasks(updateSocial?.data?.userData?.socialRewardDeets);
            setDailyLoginTasks(updatePoints?.data?.userData?.referralRewardDeets);
            setReferees(updatePoints?.data?.userData?.referralPoints);
            setYtVidFourDisabled(false)
        }
    }

    /*const claimFollowBirds = async () => {
        setFollowBirdsDisabled(true)
        const points = 150;
        const updatePoints = await axios.post(`${import.meta.env.VITE_APP_URL}/update-task-points`, {
            pointsNo: points,
            user
        })

        const updateSocial = await axios.post(`${import.meta.env.VITE_APP_URL}/update-social-reward`, {
            claimTreshold: 'follow-birds-x',
            user
        })

        if (updatePoints?.data?.success && updateSocial?.data?.success)  {
            toast("Claimed successfully", {
                className: "",
                duration: 799,
                style: {
                  background: "#363636",
                  color: "#fff",
                },
            });
            setTotalPoints(updatePoints?.data?.userData?.pointsNo);
            setPointsToday(updatePoints?.data?.userData?.pointsToday);
            setSocialTasks(updateSocial?.data?.userData?.socialRewardDeets);
            setDailyLoginTasks(updatePoints?.data?.userData?.referralRewardDeets);
            setReferees(updatePoints?.data?.userData?.referralPoints);
            setFollowBirdsDisabled(false);
        }
    };

    const claimYoutubeBirds = async () => {
        setYoutubeBirdsDisabled(true)
        const points = 150;
        const updatePoints = await axios.post(`${import.meta.env.VITE_APP_URL}/update-task-points`, {
            pointsNo: points,
            user
        })

        const updateSocial = await axios.post(`${import.meta.env.VITE_APP_URL}/update-social-reward`, {
            claimTreshold: 'sub-birds-yt',
            user
        })

        if (updatePoints?.data?.success && updateSocial?.data?.success)  {
            toast("Claimed successfully", {
                className: "",
                duration: 799,
                style: {
                  background: "#363636",
                  color: "#fff",
                },
            });
            setTotalPoints(updatePoints?.data?.userData?.pointsNo);
            setPointsToday(updatePoints?.data?.userData?.pointsToday);
            setSocialTasks(updateSocial?.data?.userData?.socialRewardDeets);
            setDailyLoginTasks(updatePoints?.data?.userData?.referralRewardDeets);
            setReferees(updatePoints?.data?.userData?.referralPoints);
            setYoutubeBirdsDisabled(false)
        }
    }

    const claimPlayBirds = async () => {
        setPlayBirdsDisabled(true)
        const points = 150;
        const updatePoints = await axios.post(`${import.meta.env.VITE_APP_URL}/update-task-points`, {
            pointsNo: points,
            user
        })

        const updateSocial = await axios.post(`${import.meta.env.VITE_APP_URL}/update-social-reward`, {
            claimTreshold: 'play-birds',
            user
        })

        if (updatePoints?.data?.success && updateSocial?.data?.success)  {
            toast("Claimed successfully", {
                className: "",
                duration: 799,
                style: {
                  background: "#363636",
                  color: "#fff",
                },
            });
            setTotalPoints(updatePoints?.data?.userData?.pointsNo);
            setPointsToday(updatePoints?.data?.userData?.pointsToday);
            setSocialTasks(updateSocial?.data?.userData?.socialRewardDeets);
            setDailyLoginTasks(updatePoints?.data?.userData?.referralRewardDeets);
            setReferees(updatePoints?.data?.userData?.referralPoints);
            setPlayBirdsDisabled(false)
        }
    }

    const claimJoinTonAi = async () => {
        setJoinTonAiDisabled(true)
        const points = 2000;
        const updatePoints = await axios.post(`${import.meta.env.VITE_APP_URL}/update-task-points`, {
            pointsNo: points,
            user
        })

        const updateSocial = await axios.post(`${import.meta.env.VITE_APP_URL}/update-social-reward`, {
            claimTreshold: 'ton-ai',
            user
        })

        if (updatePoints?.data?.success && updateSocial?.data?.success)  {
            toast("Claimed successfully", {
                className: "",
                duration: 799,
                style: {
                  background: "#363636",
                  color: "#fff",
                },
            });
            setTotalPoints(updatePoints?.data?.userData?.pointsNo);
            setPointsToday(updatePoints?.data?.userData?.pointsToday);
            setSocialTasks(updateSocial?.data?.userData?.socialRewardDeets);
            setDailyLoginTasks(updatePoints?.data?.userData?.referralRewardDeets);
            setReferees(updatePoints?.data?.userData?.referralPoints);
            setJoinTonAiDisabled(false);
        }
    };*/

    /*const claimPigsBot = async () => {
        setPigsBotDisabled(true)
        const points = 2000;
        const updatePoints = await axios.post(`${import.meta.env.VITE_APP_URL}/update-task-points`, {
            pointsNo: points,
            user
        })

        const updateSocial = await axios.post(`${import.meta.env.VITE_APP_URL}/update-social-reward`, {
            claimTreshold: 'pigs-bot',
            user
        })

        if (updatePoints?.data?.success && updateSocial?.data?.success)  {
            toast("Claimed successfully", {
                className: "",
                duration: 799,
                style: {
                  background: "#363636",
                  color: "#fff",
                },
            });
            setTotalPoints(updatePoints?.data?.userData?.pointsNo);
            setPointsToday(updatePoints?.data?.userData?.pointsToday);
            setSocialTasks(updateSocial?.data?.userData?.socialRewardDeets);
            setDailyLoginTasks(updatePoints?.data?.userData?.referralRewardDeets);
            setReferees(updatePoints?.data?.userData?.referralPoints);
            setPigsBotDisabled(false);
        }
    };

    const claimPigsChannel = async () => {
        setPigsChannelDisabled(true)
        const points = 150;
        const updatePoints = await axios.post(`${import.meta.env.VITE_APP_URL}/update-task-points`, {
            pointsNo: points,
            user
        })

        const updateSocial = await axios.post(`${import.meta.env.VITE_APP_URL}/update-social-reward`, {
            claimTreshold: 'pigs-channel',
            user
        })

        if (updatePoints?.data?.success && updateSocial?.data?.success)  {
            toast("Claimed successfully", {
                className: "",
                duration: 799,
                style: {
                  background: "#363636",
                  color: "#fff",
                },
            });
            setTotalPoints(updatePoints?.data?.userData?.pointsNo);
            setPointsToday(updatePoints?.data?.userData?.pointsToday);
            setSocialTasks(updateSocial?.data?.userData?.socialRewardDeets);
            setDailyLoginTasks(updatePoints?.data?.userData?.referralRewardDeets);
            setReferees(updatePoints?.data?.userData?.referralPoints);
            setPigsChannelDisabled(false);
        }
    };*/

    /*const claimTonPartyBot = async () => {
        setTonPartyBotDisabled(true)
        const points = 2000;
        const updatePoints = await axios.post(`${import.meta.env.VITE_APP_URL}/update-task-points`, {
            pointsNo: points,
            user
        })

        const updateSocial = await axios.post(`${import.meta.env.VITE_APP_URL}/update-social-reward`, {
            claimTreshold: 'ton-party-bot',
            user
        })

        if (updatePoints?.data?.success && updateSocial?.data?.success)  {
            toast("Claimed successfully", {
                className: "",
                duration: 799,
                style: {
                  background: "#363636",
                  color: "#fff",
                },
            });
            setTotalPoints(updatePoints?.data?.userData?.pointsNo);
            setPointsToday(updatePoints?.data?.userData?.pointsToday);
            setSocialTasks(updateSocial?.data?.userData?.socialRewardDeets);
            setDailyLoginTasks(updatePoints?.data?.userData?.referralRewardDeets);
            setReferees(updatePoints?.data?.userData?.referralPoints);
            setTonPartyBotDisabled(false);
        }
    };

    const claimTonPartyChannel = async () => {
        setTonPartyChannelDisabled(true)
        const points = 150;
        const updatePoints = await axios.post(`${import.meta.env.VITE_APP_URL}/update-task-points`, {
            pointsNo: points,
            user
        })

        const updateSocial = await axios.post(`${import.meta.env.VITE_APP_URL}/update-social-reward`, {
            claimTreshold: 'ton-party-channel',
            user
        })

        if (updatePoints?.data?.success && updateSocial?.data?.success)  {
            toast("Claimed successfully", {
                className: "",
                duration: 799,
                style: {
                  background: "#363636",
                  color: "#fff",
                },
            });
            setTotalPoints(updatePoints?.data?.userData?.pointsNo);
            setPointsToday(updatePoints?.data?.userData?.pointsToday);
            setSocialTasks(updateSocial?.data?.userData?.socialRewardDeets);
            setDailyLoginTasks(updatePoints?.data?.userData?.referralRewardDeets);
            setReferees(updatePoints?.data?.userData?.referralPoints);
            setTonPartyChannelDisabled(false);
        }
    };*/

    const getPoints = async (idx: number) => {
        if (idx === 0) return 75;
        if(idx === 1) return 100;
        if(idx === 2) return 125;
        if(idx === 3) return 150;
        if(idx === 4) return 175;
        if(idx === 5) return 200;
        if(idx === 6) return 300;
    }

    const claimDailyTask = async (tasks: any, index: any) => {
        const taskToClaim = tasks[index];

        const points = await getPoints(index);
        const updatePoints = await axios.post(`${import.meta.env.VITE_APP_URL}/update-task-points`, {
            pointsNo: points,
            user
        })

        const updateSocial = await axios.post(`${import.meta.env.VITE_APP_URL}/update-daily-reward`, {
            claimTreshold: taskToClaim.claimTreshold,
            user
        })

        if (updatePoints?.data?.success && updateSocial?.data?.success)  {
            toast("Claimed successfully", {
                className: "",
                duration: 799,
                style: {
                  background: "#363636",
                  color: "#fff",
                },
            });

            console.log(updatePoints, updateSocial)
            setTotalPoints(updateSocial?.data?.userData?.pointsNo);
            setPointsToday(updateSocial?.data?.userData?.pointsToday);
            setSocialTasks(updateSocial?.data?.userData?.socialRewardDeets);
            setDailyLoginTasks(updateSocial?.data?.userData?.referralRewardDeets);
            setReferees(updateSocial?.data?.userData?.referralPoints);
            handleCloseBottomSheet();
        }
    }
    
    const closeModal = useCallback(() => {
        setOpenModal(prev => !prev);
    }, []);

    /*const toggleModalBirds = useCallback(() => {
        setOpenModalBirds(prev => !prev);
    }, []);*/

    /*const closeModalBirds = useCallback(() => {
        setOpenModalBirds(prev => !prev);
    }, []);*/

    function rearrangeRewards(socialRewardDeets: any) {
        return socialRewardDeets.sort((a: any, b: any) => {
            // Sort by rewardClaimed field; false comes before true
            if (a.rewardClaimed === b.rewardClaimed) {
                return 0;
            }
            return a.rewardClaimed ? 1 : -1;
        });
    }







    const [user, setUser] = useState<Telegram.InitDataUser | null>(null);

    useEffect(() => {
        // Ensure the Telegram Web Apps SDK is ready
        Telegram.WebApp.ready();
    
        // Access the user information
        const userInfo = Telegram.WebApp.initDataUnsafe.user;
    
        // Check if the user information is available
        if (userInfo) {
          console.log({userInfo, url: window.location.href});
          setUser(userInfo);
        } else {
          console.log('No user information available.');
          setUser({
            allows_write_to_pm: true,
            first_name: "Qanda",
            id: 1354055384,
            language_code: "en",
            last_name: "Sensei",
            username: "qandasensei"
          })
        }
    }, []);

    useEffect (() => {
        const fetchUserData = async () => {
            const getUserData = await axios.post(`${import.meta.env.VITE_APP_URL}/get-user-data`, {user})
            console.log(getUserData?.data)
            setTotalPoints(getUserData?.data?.userData?.pointsNo);
            setPointsToday(getUserData?.data?.userData?.pointsToday);
            setSocialTasks(getUserData?.data?.userData?.socialRewardDeets);
            setDailyLoginTasks(getUserData?.data?.userData?.referralRewardDeets);
            setReferees(getUserData?.data?.userData?.referralPoints);
            setReferralCode(getUserData?.data?.userData?.referralCode);
        }

        if (user) {
          fetchUserData();
        }
    }, [user])
    
    const referralLink = `${import.meta.env.VITE_TEST_BOT_URL}?start=${referralCode}`;
    const encodedText = useMemo(() => {
        const text = `Are you a Telegram OG??\r\n\nJoin me on AIDOGS and be a part of the dog revolution.\r\n\nEarn 2,500 $AIDOGS when you signup.\r\n\nStart here: ${referralLink} \r\n\n #DOGS #Crypto #AIDOGS`;
        return encodeURIComponent(text);
    }, [referralLink]);

    const url = `https://twitter.com/intent/tweet?text=${encodedText}`;

    const encodedToMarketText = useMemo(() => {
        const text = `I just claimed my free 2000 $AIDOGS just for being a Tomarket user.\n\nSignup and claim yours now: ${referralLink}\n\n #AIDOGS #Tomarket`;
        return encodeURIComponent(text);
    }, [referralLink]);

    const urlToMarketGift = `https://twitter.com/intent/tweet?text=${encodedToMarketText}`;

    type Reward = {
        claimTreshold: number;
        rewardClaimed: boolean;
    };
      
    const isFirstUnclaimedReward = (rewards: Reward[], index: number): boolean => {
        if (index < 0 || index >= rewards.length) {
          throw new Error("Index out of bounds");
        }
      
        for (let i = 0; i < index; i++) {
          if (rewards[i].rewardClaimed === false) {
            return false;
          }
        }
      
        return rewards[index].rewardClaimed === false;
    };

    return (
        <div className="flex flex-col  items-center w-full justify-end  h-[100%] overflow-hidden">
           {open && 
           <div className='absolute m-auto bg-[#210133] bg-opacity-95 flex items-center h-[100%] w-full top-0  z-[100]'  onClick={closeModal}>
                <div className='flex relative m-auto flex-col justify-center bg-[#80808059] h-[370px] w-[90%] rounded-lg '>
                    <div className='absolute top-2 right-3 rounded-full px-2 py-1 bg-[#9ca3af54] z-[200]'>
                        <p className='text-white text-sm'>X</p>
                    </div>
                    <div className='flex items-center px-5'>
                        <p className='text-white text-center px-5'>
                            Every User can claim a base amount of 1,000 $AIDOGS
                        </p>

                    </div>
                    <div className='mt-6 py-2  flex justify-between bg-[#00000040]'>
                        <div className='flex items-center basis-1/3 justify-center '>
                            <p className='text-center text-white text-xs'>Eligible Users</p>
                        </div>
                        <div className='flex items-center basis-1/3 justify-center '>
                            <p className='text-center text-white text-xs'>Bonus Reward</p>
                        </div>
                        <div className='flex items-center  basis-1/3  justify-center'>
                            <p className='text-center text-white text-xs'>Claim Amount</p>
                        </div>

                    </div>
                    <div className='mt-4 py-2   flex justify-between'>
                        <div className='flex items-center basis-1/3 justify-center'>
                            <p className='text-center text-white text-xs'>First 100k</p>
                        </div>
                        <div className='flex items-center basis-1/3 justify-center'>
                            <p className='text-center text-white text-xs'>150%</p>
                        </div>
                        <div className='flex items-center basis-1/3 justify-center'>
                            <p className='text-center text-white text-xs'>2,500 $AIDOGS</p>
                        </div>

                    </div>
                    <div className='mt-4 py-2   flex justify-between'>
                        <div className='flex items-center basis-1/3 justify-center'>
                            <p className='text-center text-white text-xs'>Next 500k</p>
                        </div>
                        <div className='flex items-center basis-1/3 justify-center'>
                            <p className='text-center text-white text-xs'>100%</p>
                        </div>
                        <div className='flex items-center basis-1/3 justify-center'>
                            <p className='text-center text-white text-xs'>2,000 $AIDOGS</p>
                        </div>

                    </div>
                    <div className='mt-4 py-2  flex justify-between'>
                        <div className='flex items-center basis-1/3 justify-center'>
                            <p className='text-center text-white text-xs'>Next 1.5M</p>
                        </div>
                        <div className='flex items-center basis-1/3 justify-center'>
                            <p className='text-center text-white text-xs'>50%</p>
                        </div>
                        <div className='flex items-center basis-1/3 justify-center'>
                            <p className='text-center text-white text-xs'>1,500 $AIDOGS</p>
                        </div>

                    </div>
                    <div className='mt-4 py-2   flex justify-between'>
                        <div className='flex items-center basis-1/3 justify-center'>
                            <p className='text-center text-white text-xs'>Next 5M</p>
                        </div>
                        <div className='flex items-center basis-1/3 justify-center'>
                            <p className='text-center text-white text-xs'>25%</p>
                        </div>
                        <div className='flex items-center basis-1/3 justify-center'>
                            <p className='text-center text-white text-xs'>1,250 $AIDOGS</p>
                        </div>

                    </div>
                </div>
            </div>}
            <div className="flex flex-col  w-full overflow-y-auto h-[100%]">
                <div className="flex flex-col py-5 my-4  justify-center align-center m-auto items-center w-80">
                    <p className="text-[#FFFFFF] text-4xl font-OpenSans font-bold">{totalPoints.toLocaleString()}</p>
                    <p className="text-[#A6A6A6] text-xl font-OpenSans font-semibold">$AIDOGS</p>
                </div>
                <div className='bg-[#180026] rounded-md px-6 py-4'>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={15}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="flex h-[125px] flex-col rounded-lg justify-center align-center items-center text-white bg-white/15 py-5">
                                <div className=" w-[50%] small-mobile:w-[20%] mobile:w-[25%]">
                                    <img className="w-full" src={logoBig} alt="" />
                                </div>
                                <div className='flex flex-col justify-center align-center items-center py-4'>
                                    <p className='text-sm'>Daily Reward</p>
                                </div>
                                <div className="flex flex-col rounded-lg bg-white/20 justify-center align-center m-auto items-center">
                                    {
                                        pointsToday === 1 ?
                                        <CountdownTimer /> : 
                                        <button className="bg-white text-xs font-OpenSans text-[rgba(0,0,0)] rounded-lg px-4 py-2  rounded-[1px]" onClick={handleOpenBottomSheet}>Claim</button>
                                    }
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='flex h-[125px] flex-col rounded-lg justify-center align-center items-center text-white bg-white/15 py-5'>
                                <div className=" w-[50%] small-mobile:w-[20%] mobile:w-[25%]">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" width="20px" viewBox="0 0 496 512"><path d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z" /></svg>
                                </div>
                                <div className='flex flex-col justify-center align-center items-center py-4'>
                                    <p className='text-sm'>Join Telegram</p>
                                </div>
                                <div className="flex flex-col rounded-lg bg-white/20 justify-center align-center m-auto items-center">
                                    <button className="bg-white text-xs font-OpenSans text-[rgba(0,0,0)] rounded-lg px-4 py-2 rounded-[1px]" onClick={() => {openTg()}}>
                                        Join
                                    </button>
                                </div>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='flex h-[125px] flex-col rounded-lg justify-center align-center items-center text-white bg-white/15 py-5'>
                                <div className=" w-[50%] small-mobile:w-[20%] mobile:w-[25%]">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" width="20px" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" /></svg>
                                </div>
                                <div className='flex flex-col justify-center align-center items-center py-4'>
                                    <p className='text-sm'> Follow On X</p>
                                </div>
                                <div className="flex flex-col rounded-lg bg-white/20  justify-center align-center m-auto items-center">


                                    <button
                                        className="bg-white text-xs font-OpenSans text-[rgba(0,0,0)] rounded-lg px-4 py-2  rounded-[1px]"
                                        onClick={(e) => openTwitter(e)}

                                    >
                                        Follow
                                    </button>
                                </div>

                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

                <div className="w-full flex flex-col pt-7 px-4 relative z-10 gap-5">
                    <p className='text-white text-xl pb-5'>Tasks</p>
                    {
                        rearrangeRewards(socialTasks).map((task: any) => (
                            !task.rewardClaimed &&
                            <>
                                {
                                    task.claimTreshold === 'telegram' &&
                                    <div className='flex justify-between py-2 w-full items-center bg-white/20 rounded-md px-3'>
                                        <div className='flex items-center'>
                                            <div className=" w-[50%] small-mobile:w-[5%] mobile:w-[8%]">

                                                <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" width="20px" viewBox="0 0 496 512"><path d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z" /></svg>

                                            </div>
                                            <div className='flex flex-col pl-5'>
                                                <p className='text-white text-bold taskTitle'>Join AIDOG Tg Channel</p>
                                                <span className='text-[#A6A6A6]'>+150 $AIDOGS</span>
                                            </div>
                                        </div>
                                        <div className="">
                                            {
                                                !task.rewardClaimed && !engageTelegram &&
                                                <>
                                                    {
                                                        tgStart &&
                                                        <button className={`bg-white text-xs font-OpenSans text-[rgba(0,0,0)] rounded-lg px-4 py-2 rounded-[1px] ${task.rewardClaimed && "opacity-50"}`} onClick={() => {
                                                            openTg()
                                                            setTgClaim(true)
                                                            setTgStart(false)
                                                        }}>
                                                            Start
                                                        </button>
                                                    }
                                                    {
                                                        tgClaim &&
                                                        <button className={`bg-white text-xs font-OpenSans text-[rgba(0,0,0)] rounded-lg px-4 py-2 rounded-[1px] ${task.rewardClaimed && "opacity-50"}`} onClick={() => {
                                                            toast("Confirming, please wait...", {
                                                                className: "",
                                                                duration: 799,
                                                                style: {
                                                                  background: "#363636",
                                                                  color: "#fff",
                                                                },
                                                            });
                                                            setTimeout(() => {
                                                                setEngageTelegram(true)
                                                            }, 5000)
                                                        }}>
                                                            Check
                                                        </button>
                                                    }
                                                </>
                                            }
                                            {
                                                !task.rewardClaimed && engageTelegram &&
                                                <button className={`bg-white text-xs font-OpenSans text-[rgba(0,0,0)] rounded-lg px-4 py-2 rounded-[1px] ${task.rewardClaimed && "opacity-50"}`} onClick={() => {
                                                    claimTg();
                                                }} disabled={tgDisabled}>
                                                    Claim
                                                </button>
                                            }
                                            {
                                                task.rewardClaimed &&
                                                <button className={`bg-white text-xs font-OpenSans text-[rgba(0,0,0)] rounded-lg px-4 py-2 rounded-[1px] ${task.rewardClaimed && "opacity-50"}`} disabled={true}>
                                                    Done
                                                </button>
                                            }
                                        </div>
                                    </div>
                                }
                                {
                                    task.claimTreshold === 'follow' &&
                                    <div className='flex justify-between py-2 w-full items-center bg-white/20 rounded-md px-3'>
                                        <div className='flex items-center'>
                                            <div className=" w-[50%] small-mobile:w-[5%] mobile:w-[8%]">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" width="20px" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" /></svg>
                                            </div>
                                            <div className='flex flex-col pl-5'>
                                                <p className='text-white text-bold taskTitle' onClick={() => {}}>Follow on X</p>
                                                <span className='text-[#A6A6A6]'>+150 $AIDOGS</span>
                                            </div>
                                        </div>
                                        <div className="">
                                            {
                                                !task.rewardClaimed && !engageFollow &&
                                                <button className={`bg-white text-xs font-OpenSans text-[rgba(0,0,0)] rounded-lg px-4 py-2 rounded-[1px] ${task.rewardClaimed && "opacity-50"}`} onClick={() => {
                                                    window.open('https://x.com/aidogscomm', '_blank');
                                                    setTimeout(() => {
                                                        setEngageFollow(true)
                                                    }, 5000)
                                                }}>
                                                    Follow
                                                </button>
                                            }
                                            {
                                                !task.rewardClaimed && engageFollow &&
                                                <button className={`bg-white text-xs font-OpenSans text-[rgba(0,0,0)] rounded-lg px-4 py-2 rounded-[1px] ${task.rewardClaimed && "opacity-50"}`} onClick={() => {
                                                    claimFollow();
                                                }} disabled={followDisabled}>
                                                    Claim
                                                </button>
                                            }
                                            {
                                                task.rewardClaimed &&
                                                <button className={`bg-white text-xs font-OpenSans text-[rgba(0,0,0)] rounded-lg px-4 py-2 rounded-[1px] ${task.rewardClaimed && "opacity-50"}`} disabled={true}>
                                                    Done
                                                </button>
                                            }
                                        </div>
                                    </div>
                                }
                                {
                                    task.claimTreshold === 'repost' &&
                                    <div className='flex justify-between py-2 w-full items-center bg-white/20 rounded-md px-3'>
                                        <div className='flex items-center'>
                                            <div className=" w-[50%] small-mobile:w-[5%] mobile:w-[8%]">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" width="20px" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" /></svg>
                                            </div>
                                            <div className='flex flex-col pl-5'>
                                                <p className='text-white text-bold taskTitle' onClick={() => {}}>Share on X</p>
                                                <span className='text-[#A6A6A6]'>+150 $AIDOGS</span>
                                            </div>
                                        </div>
                                        <div className="">
                                            {
                                                !task.rewardClaimed && !engageRepost &&
                                                <button className={`bg-white text-xs font-OpenSans text-[rgba(0,0,0)] rounded-lg px-4 py-2 rounded-[1px] ${task.rewardClaimed && "opacity-50"}`} onClick={async () => {
                                                    window.open(url, '_blank');
                                                    setTimeout(() => {
                                                        setEngageRepost(true)
                                                    }, 5000)
                                                }}>
                                                    Share
                                                </button>
                                            }
                                            {
                                                !task.rewardClaimed && engageRepost &&
                                                <button className={`bg-white text-xs font-OpenSans text-[rgba(0,0,0)] rounded-lg px-4 py-2 rounded-[1px] ${task.rewardClaimed && "opacity-50"}`} onClick={() => {
                                                    claimShare();
                                                }} disabled={repostDisabled}>
                                                    Claim
                                                </button>
                                            }
                                            {
                                                task.rewardClaimed &&
                                                <button className={`bg-white text-xs font-OpenSans text-[rgba(0,0,0)] rounded-lg px-4 py-2 rounded-[1px] ${task.rewardClaimed && "opacity-50"}`} disabled={true}>
                                                    Done
                                                </button>
                                            }
                                        </div>
                                    </div>
                                }
                                {
                                    task.claimTreshold === 'two-frens' &&
                                    <div className='flex justify-between py-2 w-full items-center bg-white/20 rounded-md px-3'>
                                        <div className='flex items-center'>
                                            <div className=" w-[50%] small-mobile:w-[5%] mobile:w-[8%]">
                                                <img className="w-full" src={logoBig} alt="" />
                                            </div>
                                            <div className='flex flex-col pl-5'>
                                                <p className='text-white text-bold taskTitle' onClick={() => {}}>Invite 2 frens</p>
                                                <span className='text-[#A6A6A6]'>+2000 $AIDOGS</span>
                                            </div>
                                        </div>
                                        
                                        <div className="">
                                            {
                                                !task.rewardClaimed && !engageTwoFrens &&
                                                <button className={`bg-white text-xs font-OpenSans text-[rgba(0,0,0)] rounded-lg px-4 py-2 rounded-[1px] ${task.rewardClaimed && "opacity-50"}`} onClick={() => {
                                                    setEngageTwoFrens(true)
                                                }}>
                                                    Start
                                                </button>
                                            }
                                            {
                                                !task.rewardClaimed && engageTwoFrens &&
                                                <button className={`bg-white text-xs font-OpenSans text-[rgba(0,0,0)] rounded-lg px-4 py-2 rounded-[1px] ${task.rewardClaimed && "opacity-50"}`} onClick={() => {
                                                    claimTwoFrens();
                                                }} disabled={twoFrensDisabled}>
                                                    Claim
                                                </button>
                                            }
                                            {
                                                task.rewardClaimed &&
                                                <button className={`bg-white text-xs font-OpenSans text-[rgba(0,0,0)] rounded-lg px-4 py-2 rounded-[1px] ${task.rewardClaimed && "opacity-50"}`} disabled={true}>
                                                    Done
                                                </button>
                                            }
                                        </div>
                                    </div>
                                }
                                {
                                    task.claimTreshold === 'instagram' &&
                                    <div className='flex justify-between py-2 w-full items-center bg-white/20 rounded-md px-3'>
                                        <div className='flex items-center'>
                                            <div className=" w-[50%] small-mobile:w-[5%] mobile:w-[8%]">
                                                <>
                                                    <svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 50 50" width="20px" height="20px"><path style={{stroke:'#000000',strokeWidth:2,strokeMiterlimit:10}} d="M16,46h18c6.627,0,12-5.373,12-12V16c0-6.627-5.373-12-12-12H16C9.373,4,4,9.373,4,16v18C4,40.627,9.373,46,16,46z"/><circle style={{stroke:'#000000',strokeWidth:2,strokeMiterlimit:10}} cx="25" cy="25" r="10"/><circle cx="37" cy="13" r="2"/></svg>
                                                </>
                                            </div>
                                            <div className='flex flex-col pl-5'>
                                                <p className='text-white text-bold taskTitle' onClick={() => {}}>Follow on Insta</p>
                                                <span className='text-[#A6A6A6]'>+150 $AIDOGS</span>
                                            </div>
                                        </div>
                                        <div className="">
                                            {
                                                !task.rewardClaimed && !engageInstagram &&
                                                <button className={`bg-white text-xs font-OpenSans text-[rgba(0,0,0)] rounded-lg px-4 py-2 rounded-[1px] ${task.rewardClaimed && "opacity-50"}`} onClick={async () => {
                                                    window.open('https://www.instagram.com/aidogscomm?igsh=MjhqdTh1bWptbmE5&utm_source=qr', '_blank');
                                                    setTimeout(() => {
                                                        setEngageInstagram(true)
                                                    }, 5000)
                                                }}>
                                                    Follow
                                                </button>
                                            }
                                            {
                                                !task.rewardClaimed && engageInstagram &&
                                                <button className={`bg-white text-xs font-OpenSans text-[rgba(0,0,0)] rounded-lg px-4 py-2 rounded-[1px] ${task.rewardClaimed && "opacity-50"}`} onClick={() => {
                                                    claimInsta();
                                                }} disabled={instagramDisabled}>
                                                    Claim
                                                </button>
                                            }
                                            {
                                                task.rewardClaimed &&
                                                <button className={`bg-white text-xs font-OpenSans text-[rgba(0,0,0)] rounded-lg px-4 py-2 rounded-[1px] ${task.rewardClaimed && "opacity-50"}`} disabled={true}>
                                                    Done
                                                </button>
                                            }
                                        </div>
                                    </div>
                                }
                                {
                                    task.claimTreshold === 'youtube' &&
                                    <div className='flex justify-between py-2 w-full items-center bg-white/20 rounded-md px-3'>
                                        <div className='flex items-center'>
                                            <div className=" w-[50%] small-mobile:w-[5%] mobile:w-[8%]">
                                                <>
                                                    <svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 50 50" width="25px" height="25px"><rect  x="0" y="0" width="20px" height="20px" style={{fill: 'none'}}/><path d="M24,40l-2,0l0,-1c-0.37,0.438 -0.563,0.574 -0.979,0.782c-0.417,0.233 -0.836,0.218 -1.23,0.218c-0.484,0 -1.034,-0.437 -1.291,-0.765c-0.232,-0.3 -0.5,-0.61 -0.5,-1.235l0,-9l2,0l0,8c0,0.23 0.268,1.007 1,1c0.813,-0.008 0.819,-0.767 1,-1l0,-8l2,0l0,11Zm4,0l-2,0l0,-14l2,0l0,4c0.23,-0.36 0.575,-0.643 0.9,-0.805c0.324,-0.165 0.648,-0.255 0.973,-0.255c0.649,0 1.159,0.23 1.505,0.671c0.349,0.441 0.622,1.026 0.622,1.889l0,6c0,0.741 -0.251,1.202 -0.576,1.6c-0.321,0.392 -0.802,0.894 -1.424,0.9c-1.051,0.011 -1.614,-0.549 -2,-1l0,1Zm-11,-12l-2,0l0,12l-2,0l0,-12l-2,0l0,-2l6,0l0,2Zm18,7l0,1.546c0,0.557 0.075,0.917 0.216,1.126c0.138,0.23 0.417,0.332 0.784,0.328c0.406,-0.004 0.663,-0.085 0.801,-0.269c0.14,-0.165 0.199,-0.628 0.199,-1.231l0,-0.5l2,0l0,0.592c0,1.093 -0.088,1.902 -0.624,2.435c-0.508,0.557 -1.3,0.815 -2.338,0.815c-0.951,0 -1.692,-0.279 -2.227,-0.858c-0.53,-0.579 -0.808,-1.369 -0.808,-2.392l0,-4.708c0,-0.904 0.317,-1.574 0.9,-2.173c0.467,-0.479 1.346,-0.711 2.295,-0.711c0.951,0 1.617,0.201 2.122,0.734c0.514,0.533 0.68,1.152 0.68,2.15l0,3.116l-4,0Zm-5,-3c0,-1.001 -0.448,-1.5 -1,-1.5c-0.552,0 -0.991,0.497 -1,1l0,6c0.009,0.288 0.448,0.5 1,0.5c0.552,0 1,-0.425 1,-0.977l0,-5.023Zm7,1l0,-1c0,-0.615 -0.448,-1 -1,-1c-0.552,0 -0.991,0.463 -1,1l0,1l2,0Z"/><path d="M19,5l-2,6l-2,-6l-2,0l3,9l0,6l2,0l0,-6l3,-9l-2,0Zm6,12c0,0.969 -0.676,1 -1,1c-0.3,0 -1,-0.013 -1,-1l0,-5c0,-0.815 0.433,-1 1,-1c0.3,0 1,-0.002 1,1l0,5Zm1.24,-7.278c-0.627,-0.576 -1.27,-0.722 -2.24,-0.722c-1.068,0 -1.591,0.168 -2.242,0.701c-0.625,0.53 -0.799,0.937 -0.758,2.299l0,5c0,0.996 0.162,1.652 0.765,2.236c0.625,0.579 1.216,0.764 2.235,0.764c1.065,0 1.648,-0.184 2.248,-0.765c0.627,-0.558 0.752,-1.237 0.752,-2.235l0,-5c0,-0.882 -0.157,-1.721 -0.76,-2.278Zm6.76,-0.722l0,8c-0.011,0.683 -0.816,1 -1,1c-0.208,0 -1,-0.042 -1,-1l0,-8l-2,0l0,9c0,0.972 0.98,2 2,2c1.02,0 1.559,-0.513 2,-1l0,1l2,0l0,-11l-2,0Z" style={{fillRule: 'nonzero'}}/><path d="M40.584,22.001c0.709,0.011 1.415,0.108 2.091,0.329c0.546,0.179 1.067,0.437 1.535,0.773c0.529,0.381 0.985,0.861 1.339,1.409c0.248,0.384 0.446,0.8 0.594,1.233c0.24,0.699 0.345,1.433 0.357,2.171c0.017,3.417 0.052,6.836 -0.002,10.253c-0.019,0.733 -0.132,1.463 -0.379,2.156c-0.153,0.43 -0.356,0.842 -0.609,1.222c-0.361,0.544 -0.823,1.017 -1.358,1.391c-0.452,0.316 -0.953,0.56 -1.477,0.732c-0.649,0.212 -1.327,0.311 -2.007,0.328c-10.111,0.158 -20.226,0.191 -30.336,0c-0.609,-0.019 -1.213,-0.116 -1.792,-0.312c-0.402,-0.136 -0.789,-0.318 -1.15,-0.541c-0.293,-0.181 -0.568,-0.389 -0.822,-0.62c-0.88,-0.8 -1.487,-1.864 -1.802,-3.005c-0.166,-0.604 -0.248,-1.226 -0.264,-1.851c-0.051,-3.279 -0.052,-6.559 0,-9.838c0.019,-0.733 0.132,-1.463 0.379,-2.156c0.153,-0.43 0.356,-0.842 0.609,-1.222c0.361,-0.543 0.823,-1.017 1.358,-1.391c0.452,-0.316 0.953,-0.56 1.477,-0.732c0.649,-0.212 1.327,-0.31 2.007,-0.328c10.083,-0.158 20.168,-0.054 30.252,-0.001Zm-30.079,1.999c-0.425,0.002 -0.849,0.043 -1.262,0.146c-0.641,0.16 -1.244,0.469 -1.708,0.944c-0.161,0.166 -0.305,0.349 -0.427,0.544c-0.167,0.266 -0.296,0.555 -0.391,0.855c-0.148,0.468 -0.209,0.957 -0.217,1.447c-0.016,3.231 -0.05,6.461 0.001,9.691c0.012,0.441 0.067,0.88 0.179,1.307c0.21,0.798 0.619,1.552 1.233,2.111c0.164,0.149 0.341,0.283 0.529,0.399c0.232,0.144 0.481,0.26 0.739,0.348c0.407,0.137 0.832,0.2 1.26,0.208c10.061,0.063 20.124,0.157 30.185,-0.001c0.398,-0.011 0.795,-0.057 1.182,-0.158c0.621,-0.163 1.206,-0.469 1.657,-0.931c0.151,-0.155 0.286,-0.325 0.404,-0.507c0.169,-0.262 0.301,-0.547 0.398,-0.844c0.153,-0.462 0.219,-0.946 0.232,-1.432c0.054,-3.417 0.054,-6.836 0,-10.254c-0.013,-0.485 -0.079,-0.97 -0.232,-1.432c-0.097,-0.297 -0.229,-0.582 -0.398,-0.844c-0.118,-0.182 -0.253,-0.352 -0.404,-0.507c-0.451,-0.462 -1.036,-0.768 -1.657,-0.931c-0.387,-0.101 -0.784,-0.147 -1.182,-0.158c-10.039,-0.157 -20.081,-0.001 -30.121,-0.001Z" style={{fillRule:'nonzero'}}/></svg>
                                                </>
                                            </div>
                                            <div className='flex flex-col pl-5'>
                                                <p className='text-white text-bold taskTitle' onClick={() => {}}>Subscribe to Youtube</p>
                                                <span className='text-[#A6A6A6]'>+150 $AIDOGS</span>
                                            </div>
                                        </div>
                                        
                                        <div className="">
                                            {
                                                !task.rewardClaimed && !engageYoutube &&
                                                <button className={`bg-white text-xs font-OpenSans text-[rgba(0,0,0)] rounded-lg px-4 py-2 rounded-[1px] ${task.rewardClaimed && "opacity-50"}`} onClick={() => {window.open('https://www.youtube.com/@aidogscomm', '_blank');
                                                    setTimeout(() => {
                                                        setEngageYoutube(true)
                                                    }, 5000)
                                                }}>
                                                    Start
                                                </button>
                                            }
                                            {
                                                !task.rewardClaimed && engageYoutube &&
                                                <button className={`bg-white text-xs font-OpenSans text-[rgba(0,0,0)] rounded-lg px-4 py-2 rounded-[1px] ${task.rewardClaimed && "opacity-50"}`} onClick={() => {
                                                    claimYoutube();
                                                }} disabled={youtubeDisabled}>
                                                    Claim
                                                </button>
                                            }
                                            {
                                                task.rewardClaimed &&
                                                <button className={`bg-white text-xs font-OpenSans text-[rgba(0,0,0)] rounded-lg px-4 py-2 rounded-[1px] ${task.rewardClaimed && "opacity-50"}`} disabled={true}>
                                                    Done
                                                </button>
                                            }
                                        </div>
                                    </div>
                                }
                                {
                                    task.claimTreshold === 'yt-vid-one' &&
                                    <div className='flex justify-between py-2 w-full items-center bg-white/20 rounded-md px-3'>
                                        <div className='flex items-center'>
                                            <div className=" w-[50%] small-mobile:w-[5%] mobile:w-[8%]">
                                                <>
                                                    <svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 50 50" width="25px" height="25px"><rect  x="0" y="0" width="20px" height="20px" style={{fill: 'none'}}/><path d="M24,40l-2,0l0,-1c-0.37,0.438 -0.563,0.574 -0.979,0.782c-0.417,0.233 -0.836,0.218 -1.23,0.218c-0.484,0 -1.034,-0.437 -1.291,-0.765c-0.232,-0.3 -0.5,-0.61 -0.5,-1.235l0,-9l2,0l0,8c0,0.23 0.268,1.007 1,1c0.813,-0.008 0.819,-0.767 1,-1l0,-8l2,0l0,11Zm4,0l-2,0l0,-14l2,0l0,4c0.23,-0.36 0.575,-0.643 0.9,-0.805c0.324,-0.165 0.648,-0.255 0.973,-0.255c0.649,0 1.159,0.23 1.505,0.671c0.349,0.441 0.622,1.026 0.622,1.889l0,6c0,0.741 -0.251,1.202 -0.576,1.6c-0.321,0.392 -0.802,0.894 -1.424,0.9c-1.051,0.011 -1.614,-0.549 -2,-1l0,1Zm-11,-12l-2,0l0,12l-2,0l0,-12l-2,0l0,-2l6,0l0,2Zm18,7l0,1.546c0,0.557 0.075,0.917 0.216,1.126c0.138,0.23 0.417,0.332 0.784,0.328c0.406,-0.004 0.663,-0.085 0.801,-0.269c0.14,-0.165 0.199,-0.628 0.199,-1.231l0,-0.5l2,0l0,0.592c0,1.093 -0.088,1.902 -0.624,2.435c-0.508,0.557 -1.3,0.815 -2.338,0.815c-0.951,0 -1.692,-0.279 -2.227,-0.858c-0.53,-0.579 -0.808,-1.369 -0.808,-2.392l0,-4.708c0,-0.904 0.317,-1.574 0.9,-2.173c0.467,-0.479 1.346,-0.711 2.295,-0.711c0.951,0 1.617,0.201 2.122,0.734c0.514,0.533 0.68,1.152 0.68,2.15l0,3.116l-4,0Zm-5,-3c0,-1.001 -0.448,-1.5 -1,-1.5c-0.552,0 -0.991,0.497 -1,1l0,6c0.009,0.288 0.448,0.5 1,0.5c0.552,0 1,-0.425 1,-0.977l0,-5.023Zm7,1l0,-1c0,-0.615 -0.448,-1 -1,-1c-0.552,0 -0.991,0.463 -1,1l0,1l2,0Z"/><path d="M19,5l-2,6l-2,-6l-2,0l3,9l0,6l2,0l0,-6l3,-9l-2,0Zm6,12c0,0.969 -0.676,1 -1,1c-0.3,0 -1,-0.013 -1,-1l0,-5c0,-0.815 0.433,-1 1,-1c0.3,0 1,-0.002 1,1l0,5Zm1.24,-7.278c-0.627,-0.576 -1.27,-0.722 -2.24,-0.722c-1.068,0 -1.591,0.168 -2.242,0.701c-0.625,0.53 -0.799,0.937 -0.758,2.299l0,5c0,0.996 0.162,1.652 0.765,2.236c0.625,0.579 1.216,0.764 2.235,0.764c1.065,0 1.648,-0.184 2.248,-0.765c0.627,-0.558 0.752,-1.237 0.752,-2.235l0,-5c0,-0.882 -0.157,-1.721 -0.76,-2.278Zm6.76,-0.722l0,8c-0.011,0.683 -0.816,1 -1,1c-0.208,0 -1,-0.042 -1,-1l0,-8l-2,0l0,9c0,0.972 0.98,2 2,2c1.02,0 1.559,-0.513 2,-1l0,1l2,0l0,-11l-2,0Z" style={{fillRule: 'nonzero'}}/><path d="M40.584,22.001c0.709,0.011 1.415,0.108 2.091,0.329c0.546,0.179 1.067,0.437 1.535,0.773c0.529,0.381 0.985,0.861 1.339,1.409c0.248,0.384 0.446,0.8 0.594,1.233c0.24,0.699 0.345,1.433 0.357,2.171c0.017,3.417 0.052,6.836 -0.002,10.253c-0.019,0.733 -0.132,1.463 -0.379,2.156c-0.153,0.43 -0.356,0.842 -0.609,1.222c-0.361,0.544 -0.823,1.017 -1.358,1.391c-0.452,0.316 -0.953,0.56 -1.477,0.732c-0.649,0.212 -1.327,0.311 -2.007,0.328c-10.111,0.158 -20.226,0.191 -30.336,0c-0.609,-0.019 -1.213,-0.116 -1.792,-0.312c-0.402,-0.136 -0.789,-0.318 -1.15,-0.541c-0.293,-0.181 -0.568,-0.389 -0.822,-0.62c-0.88,-0.8 -1.487,-1.864 -1.802,-3.005c-0.166,-0.604 -0.248,-1.226 -0.264,-1.851c-0.051,-3.279 -0.052,-6.559 0,-9.838c0.019,-0.733 0.132,-1.463 0.379,-2.156c0.153,-0.43 0.356,-0.842 0.609,-1.222c0.361,-0.543 0.823,-1.017 1.358,-1.391c0.452,-0.316 0.953,-0.56 1.477,-0.732c0.649,-0.212 1.327,-0.31 2.007,-0.328c10.083,-0.158 20.168,-0.054 30.252,-0.001Zm-30.079,1.999c-0.425,0.002 -0.849,0.043 -1.262,0.146c-0.641,0.16 -1.244,0.469 -1.708,0.944c-0.161,0.166 -0.305,0.349 -0.427,0.544c-0.167,0.266 -0.296,0.555 -0.391,0.855c-0.148,0.468 -0.209,0.957 -0.217,1.447c-0.016,3.231 -0.05,6.461 0.001,9.691c0.012,0.441 0.067,0.88 0.179,1.307c0.21,0.798 0.619,1.552 1.233,2.111c0.164,0.149 0.341,0.283 0.529,0.399c0.232,0.144 0.481,0.26 0.739,0.348c0.407,0.137 0.832,0.2 1.26,0.208c10.061,0.063 20.124,0.157 30.185,-0.001c0.398,-0.011 0.795,-0.057 1.182,-0.158c0.621,-0.163 1.206,-0.469 1.657,-0.931c0.151,-0.155 0.286,-0.325 0.404,-0.507c0.169,-0.262 0.301,-0.547 0.398,-0.844c0.153,-0.462 0.219,-0.946 0.232,-1.432c0.054,-3.417 0.054,-6.836 0,-10.254c-0.013,-0.485 -0.079,-0.97 -0.232,-1.432c-0.097,-0.297 -0.229,-0.582 -0.398,-0.844c-0.118,-0.182 -0.253,-0.352 -0.404,-0.507c-0.451,-0.462 -1.036,-0.768 -1.657,-0.931c-0.387,-0.101 -0.784,-0.147 -1.182,-0.158c-10.039,-0.157 -20.081,-0.001 -30.121,-0.001Z" style={{fillRule:'nonzero'}}/></svg>
                                                </>
                                            </div>
                                            <div className='flex flex-col pl-5'>
                                                <p className='text-white text-bold taskTitle' onClick={() => {}}>Watch YouTube Video</p>
                                                <span className='text-[#A6A6A6]'>+1000 $AIDOGS</span>
                                            </div>
                                        </div>
                                        
                                        <div className="">
                                            {
                                                !task.rewardClaimed && !engageYtVidOne &&
                                                <button className={`bg-white text-xs font-OpenSans text-[rgba(0,0,0)] rounded-lg px-4 py-2 rounded-[1px] ${task.rewardClaimed && "opacity-50"}`} onClick={() => {window.open('https://youtu.be/z_VeGCOwNG4?si=1HwQJhxTVVeMDXRq', '_blank');
                                                    setTimeout(() => {
                                                        setEngageYtVidOne(true)
                                                    }, 5000)
                                                }}>
                                                    Start
                                                </button>
                                            }
                                            {
                                                !task.rewardClaimed && engageYtVidOne &&
                                                <button className={`bg-white text-xs font-OpenSans text-[rgba(0,0,0)] rounded-lg px-4 py-2 rounded-[1px] ${task.rewardClaimed && "opacity-50"}`} onClick={() => {
                                                    claimYtVidOne();
                                                }} disabled={ytVidOneDisabled}>
                                                    Claim
                                                </button>
                                            }
                                            {
                                                task.rewardClaimed &&
                                                <button className={`bg-white text-xs font-OpenSans text-[rgba(0,0,0)] rounded-lg px-4 py-2 rounded-[1px] ${task.rewardClaimed && "opacity-50"}`} disabled={true}>
                                                    Done
                                                </button>
                                            }
                                        </div>
                                    </div>
                                }
                                {
                                    task.claimTreshold === 'yt-vid-three' &&
                                    <div className='flex justify-between py-2 w-full items-center bg-white/20 rounded-md px-3'>
                                        <div className='flex items-center'>
                                            <div className=" w-[50%] small-mobile:w-[5%] mobile:w-[8%]">
                                                <>
                                                    <svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 50 50" width="25px" height="25px"><rect  x="0" y="0" width="20px" height="20px" style={{fill: 'none'}}/><path d="M24,40l-2,0l0,-1c-0.37,0.438 -0.563,0.574 -0.979,0.782c-0.417,0.233 -0.836,0.218 -1.23,0.218c-0.484,0 -1.034,-0.437 -1.291,-0.765c-0.232,-0.3 -0.5,-0.61 -0.5,-1.235l0,-9l2,0l0,8c0,0.23 0.268,1.007 1,1c0.813,-0.008 0.819,-0.767 1,-1l0,-8l2,0l0,11Zm4,0l-2,0l0,-14l2,0l0,4c0.23,-0.36 0.575,-0.643 0.9,-0.805c0.324,-0.165 0.648,-0.255 0.973,-0.255c0.649,0 1.159,0.23 1.505,0.671c0.349,0.441 0.622,1.026 0.622,1.889l0,6c0,0.741 -0.251,1.202 -0.576,1.6c-0.321,0.392 -0.802,0.894 -1.424,0.9c-1.051,0.011 -1.614,-0.549 -2,-1l0,1Zm-11,-12l-2,0l0,12l-2,0l0,-12l-2,0l0,-2l6,0l0,2Zm18,7l0,1.546c0,0.557 0.075,0.917 0.216,1.126c0.138,0.23 0.417,0.332 0.784,0.328c0.406,-0.004 0.663,-0.085 0.801,-0.269c0.14,-0.165 0.199,-0.628 0.199,-1.231l0,-0.5l2,0l0,0.592c0,1.093 -0.088,1.902 -0.624,2.435c-0.508,0.557 -1.3,0.815 -2.338,0.815c-0.951,0 -1.692,-0.279 -2.227,-0.858c-0.53,-0.579 -0.808,-1.369 -0.808,-2.392l0,-4.708c0,-0.904 0.317,-1.574 0.9,-2.173c0.467,-0.479 1.346,-0.711 2.295,-0.711c0.951,0 1.617,0.201 2.122,0.734c0.514,0.533 0.68,1.152 0.68,2.15l0,3.116l-4,0Zm-5,-3c0,-1.001 -0.448,-1.5 -1,-1.5c-0.552,0 -0.991,0.497 -1,1l0,6c0.009,0.288 0.448,0.5 1,0.5c0.552,0 1,-0.425 1,-0.977l0,-5.023Zm7,1l0,-1c0,-0.615 -0.448,-1 -1,-1c-0.552,0 -0.991,0.463 -1,1l0,1l2,0Z"/><path d="M19,5l-2,6l-2,-6l-2,0l3,9l0,6l2,0l0,-6l3,-9l-2,0Zm6,12c0,0.969 -0.676,1 -1,1c-0.3,0 -1,-0.013 -1,-1l0,-5c0,-0.815 0.433,-1 1,-1c0.3,0 1,-0.002 1,1l0,5Zm1.24,-7.278c-0.627,-0.576 -1.27,-0.722 -2.24,-0.722c-1.068,0 -1.591,0.168 -2.242,0.701c-0.625,0.53 -0.799,0.937 -0.758,2.299l0,5c0,0.996 0.162,1.652 0.765,2.236c0.625,0.579 1.216,0.764 2.235,0.764c1.065,0 1.648,-0.184 2.248,-0.765c0.627,-0.558 0.752,-1.237 0.752,-2.235l0,-5c0,-0.882 -0.157,-1.721 -0.76,-2.278Zm6.76,-0.722l0,8c-0.011,0.683 -0.816,1 -1,1c-0.208,0 -1,-0.042 -1,-1l0,-8l-2,0l0,9c0,0.972 0.98,2 2,2c1.02,0 1.559,-0.513 2,-1l0,1l2,0l0,-11l-2,0Z" style={{fillRule: 'nonzero'}}/><path d="M40.584,22.001c0.709,0.011 1.415,0.108 2.091,0.329c0.546,0.179 1.067,0.437 1.535,0.773c0.529,0.381 0.985,0.861 1.339,1.409c0.248,0.384 0.446,0.8 0.594,1.233c0.24,0.699 0.345,1.433 0.357,2.171c0.017,3.417 0.052,6.836 -0.002,10.253c-0.019,0.733 -0.132,1.463 -0.379,2.156c-0.153,0.43 -0.356,0.842 -0.609,1.222c-0.361,0.544 -0.823,1.017 -1.358,1.391c-0.452,0.316 -0.953,0.56 -1.477,0.732c-0.649,0.212 -1.327,0.311 -2.007,0.328c-10.111,0.158 -20.226,0.191 -30.336,0c-0.609,-0.019 -1.213,-0.116 -1.792,-0.312c-0.402,-0.136 -0.789,-0.318 -1.15,-0.541c-0.293,-0.181 -0.568,-0.389 -0.822,-0.62c-0.88,-0.8 -1.487,-1.864 -1.802,-3.005c-0.166,-0.604 -0.248,-1.226 -0.264,-1.851c-0.051,-3.279 -0.052,-6.559 0,-9.838c0.019,-0.733 0.132,-1.463 0.379,-2.156c0.153,-0.43 0.356,-0.842 0.609,-1.222c0.361,-0.543 0.823,-1.017 1.358,-1.391c0.452,-0.316 0.953,-0.56 1.477,-0.732c0.649,-0.212 1.327,-0.31 2.007,-0.328c10.083,-0.158 20.168,-0.054 30.252,-0.001Zm-30.079,1.999c-0.425,0.002 -0.849,0.043 -1.262,0.146c-0.641,0.16 -1.244,0.469 -1.708,0.944c-0.161,0.166 -0.305,0.349 -0.427,0.544c-0.167,0.266 -0.296,0.555 -0.391,0.855c-0.148,0.468 -0.209,0.957 -0.217,1.447c-0.016,3.231 -0.05,6.461 0.001,9.691c0.012,0.441 0.067,0.88 0.179,1.307c0.21,0.798 0.619,1.552 1.233,2.111c0.164,0.149 0.341,0.283 0.529,0.399c0.232,0.144 0.481,0.26 0.739,0.348c0.407,0.137 0.832,0.2 1.26,0.208c10.061,0.063 20.124,0.157 30.185,-0.001c0.398,-0.011 0.795,-0.057 1.182,-0.158c0.621,-0.163 1.206,-0.469 1.657,-0.931c0.151,-0.155 0.286,-0.325 0.404,-0.507c0.169,-0.262 0.301,-0.547 0.398,-0.844c0.153,-0.462 0.219,-0.946 0.232,-1.432c0.054,-3.417 0.054,-6.836 0,-10.254c-0.013,-0.485 -0.079,-0.97 -0.232,-1.432c-0.097,-0.297 -0.229,-0.582 -0.398,-0.844c-0.118,-0.182 -0.253,-0.352 -0.404,-0.507c-0.451,-0.462 -1.036,-0.768 -1.657,-0.931c-0.387,-0.101 -0.784,-0.147 -1.182,-0.158c-10.039,-0.157 -20.081,-0.001 -30.121,-0.001Z" style={{fillRule:'nonzero'}}/></svg>
                                                </>
                                            </div>
                                            <div className='flex flex-col pl-5'>
                                                <p className='text-white text-bold taskTitle' onClick={() => {}}>Watch YouTube Video</p>
                                                <span className='text-[#A6A6A6]'>+1000 $AIDOGS</span>
                                            </div>
                                        </div>
                                        
                                        <div className="">
                                            {
                                                !task.rewardClaimed && !engageYtVidThree &&
                                                <button className={`bg-white text-xs font-OpenSans text-[rgba(0,0,0)] rounded-lg px-4 py-2 rounded-[1px] ${task.rewardClaimed && "opacity-50"}`} onClick={() => {window.open('https://youtu.be/J56VoQdUmV8?si=BrUfCoaphy-6HwOC', '_blank');
                                                    setTimeout(() => {
                                                        setEngageYtVidThree(true)
                                                    }, 5000)
                                                }}>
                                                    Start
                                                </button>
                                            }
                                            {
                                                !task.rewardClaimed && engageYtVidThree &&
                                                <button className={`bg-white text-xs font-OpenSans text-[rgba(0,0,0)] rounded-lg px-4 py-2 rounded-[1px] ${task.rewardClaimed && "opacity-50"}`} onClick={() => {
                                                    claimYtVidThree();
                                                }} disabled={ytVidThreeDisabled}>
                                                    Claim
                                                </button>
                                            }
                                            {
                                                task.rewardClaimed &&
                                                <button className={`bg-white text-xs font-OpenSans text-[rgba(0,0,0)] rounded-lg px-4 py-2 rounded-[1px] ${task.rewardClaimed && "opacity-50"}`} disabled={true}>
                                                    Done
                                                </button>
                                            }
                                        </div>
                                    </div>
                                }
                                {
                                    task.claimTreshold === 'yt-vid-four' &&
                                    <div className='flex justify-between py-2 w-full items-center bg-white/20 rounded-md px-3'>
                                        <div className='flex items-center'>
                                            <div className=" w-[50%] small-mobile:w-[5%] mobile:w-[8%]">
                                                <>
                                                    <svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 50 50" width="25px" height="25px"><rect  x="0" y="0" width="20px" height="20px" style={{fill: 'none'}}/><path d="M24,40l-2,0l0,-1c-0.37,0.438 -0.563,0.574 -0.979,0.782c-0.417,0.233 -0.836,0.218 -1.23,0.218c-0.484,0 -1.034,-0.437 -1.291,-0.765c-0.232,-0.3 -0.5,-0.61 -0.5,-1.235l0,-9l2,0l0,8c0,0.23 0.268,1.007 1,1c0.813,-0.008 0.819,-0.767 1,-1l0,-8l2,0l0,11Zm4,0l-2,0l0,-14l2,0l0,4c0.23,-0.36 0.575,-0.643 0.9,-0.805c0.324,-0.165 0.648,-0.255 0.973,-0.255c0.649,0 1.159,0.23 1.505,0.671c0.349,0.441 0.622,1.026 0.622,1.889l0,6c0,0.741 -0.251,1.202 -0.576,1.6c-0.321,0.392 -0.802,0.894 -1.424,0.9c-1.051,0.011 -1.614,-0.549 -2,-1l0,1Zm-11,-12l-2,0l0,12l-2,0l0,-12l-2,0l0,-2l6,0l0,2Zm18,7l0,1.546c0,0.557 0.075,0.917 0.216,1.126c0.138,0.23 0.417,0.332 0.784,0.328c0.406,-0.004 0.663,-0.085 0.801,-0.269c0.14,-0.165 0.199,-0.628 0.199,-1.231l0,-0.5l2,0l0,0.592c0,1.093 -0.088,1.902 -0.624,2.435c-0.508,0.557 -1.3,0.815 -2.338,0.815c-0.951,0 -1.692,-0.279 -2.227,-0.858c-0.53,-0.579 -0.808,-1.369 -0.808,-2.392l0,-4.708c0,-0.904 0.317,-1.574 0.9,-2.173c0.467,-0.479 1.346,-0.711 2.295,-0.711c0.951,0 1.617,0.201 2.122,0.734c0.514,0.533 0.68,1.152 0.68,2.15l0,3.116l-4,0Zm-5,-3c0,-1.001 -0.448,-1.5 -1,-1.5c-0.552,0 -0.991,0.497 -1,1l0,6c0.009,0.288 0.448,0.5 1,0.5c0.552,0 1,-0.425 1,-0.977l0,-5.023Zm7,1l0,-1c0,-0.615 -0.448,-1 -1,-1c-0.552,0 -0.991,0.463 -1,1l0,1l2,0Z"/><path d="M19,5l-2,6l-2,-6l-2,0l3,9l0,6l2,0l0,-6l3,-9l-2,0Zm6,12c0,0.969 -0.676,1 -1,1c-0.3,0 -1,-0.013 -1,-1l0,-5c0,-0.815 0.433,-1 1,-1c0.3,0 1,-0.002 1,1l0,5Zm1.24,-7.278c-0.627,-0.576 -1.27,-0.722 -2.24,-0.722c-1.068,0 -1.591,0.168 -2.242,0.701c-0.625,0.53 -0.799,0.937 -0.758,2.299l0,5c0,0.996 0.162,1.652 0.765,2.236c0.625,0.579 1.216,0.764 2.235,0.764c1.065,0 1.648,-0.184 2.248,-0.765c0.627,-0.558 0.752,-1.237 0.752,-2.235l0,-5c0,-0.882 -0.157,-1.721 -0.76,-2.278Zm6.76,-0.722l0,8c-0.011,0.683 -0.816,1 -1,1c-0.208,0 -1,-0.042 -1,-1l0,-8l-2,0l0,9c0,0.972 0.98,2 2,2c1.02,0 1.559,-0.513 2,-1l0,1l2,0l0,-11l-2,0Z" style={{fillRule: 'nonzero'}}/><path d="M40.584,22.001c0.709,0.011 1.415,0.108 2.091,0.329c0.546,0.179 1.067,0.437 1.535,0.773c0.529,0.381 0.985,0.861 1.339,1.409c0.248,0.384 0.446,0.8 0.594,1.233c0.24,0.699 0.345,1.433 0.357,2.171c0.017,3.417 0.052,6.836 -0.002,10.253c-0.019,0.733 -0.132,1.463 -0.379,2.156c-0.153,0.43 -0.356,0.842 -0.609,1.222c-0.361,0.544 -0.823,1.017 -1.358,1.391c-0.452,0.316 -0.953,0.56 -1.477,0.732c-0.649,0.212 -1.327,0.311 -2.007,0.328c-10.111,0.158 -20.226,0.191 -30.336,0c-0.609,-0.019 -1.213,-0.116 -1.792,-0.312c-0.402,-0.136 -0.789,-0.318 -1.15,-0.541c-0.293,-0.181 -0.568,-0.389 -0.822,-0.62c-0.88,-0.8 -1.487,-1.864 -1.802,-3.005c-0.166,-0.604 -0.248,-1.226 -0.264,-1.851c-0.051,-3.279 -0.052,-6.559 0,-9.838c0.019,-0.733 0.132,-1.463 0.379,-2.156c0.153,-0.43 0.356,-0.842 0.609,-1.222c0.361,-0.543 0.823,-1.017 1.358,-1.391c0.452,-0.316 0.953,-0.56 1.477,-0.732c0.649,-0.212 1.327,-0.31 2.007,-0.328c10.083,-0.158 20.168,-0.054 30.252,-0.001Zm-30.079,1.999c-0.425,0.002 -0.849,0.043 -1.262,0.146c-0.641,0.16 -1.244,0.469 -1.708,0.944c-0.161,0.166 -0.305,0.349 -0.427,0.544c-0.167,0.266 -0.296,0.555 -0.391,0.855c-0.148,0.468 -0.209,0.957 -0.217,1.447c-0.016,3.231 -0.05,6.461 0.001,9.691c0.012,0.441 0.067,0.88 0.179,1.307c0.21,0.798 0.619,1.552 1.233,2.111c0.164,0.149 0.341,0.283 0.529,0.399c0.232,0.144 0.481,0.26 0.739,0.348c0.407,0.137 0.832,0.2 1.26,0.208c10.061,0.063 20.124,0.157 30.185,-0.001c0.398,-0.011 0.795,-0.057 1.182,-0.158c0.621,-0.163 1.206,-0.469 1.657,-0.931c0.151,-0.155 0.286,-0.325 0.404,-0.507c0.169,-0.262 0.301,-0.547 0.398,-0.844c0.153,-0.462 0.219,-0.946 0.232,-1.432c0.054,-3.417 0.054,-6.836 0,-10.254c-0.013,-0.485 -0.079,-0.97 -0.232,-1.432c-0.097,-0.297 -0.229,-0.582 -0.398,-0.844c-0.118,-0.182 -0.253,-0.352 -0.404,-0.507c-0.451,-0.462 -1.036,-0.768 -1.657,-0.931c-0.387,-0.101 -0.784,-0.147 -1.182,-0.158c-10.039,-0.157 -20.081,-0.001 -30.121,-0.001Z" style={{fillRule:'nonzero'}}/></svg>
                                                </>
                                            </div>
                                            <div className='flex flex-col pl-5'>
                                                <p className='text-white text-bold taskTitle' onClick={() => {}}>Watch YouTube Video</p>
                                                <span className='text-[#A6A6A6]'>+1000 $AIDOGS</span>
                                            </div>
                                        </div>
                                        
                                        <div className="">
                                            {
                                                !task.rewardClaimed && !engageYtVidFour &&
                                                <button className={`bg-white text-xs font-OpenSans text-[rgba(0,0,0)] rounded-lg px-4 py-2 rounded-[1px] ${task.rewardClaimed && "opacity-50"}`} onClick={() => {window.open('https://youtu.be/oQUgnloOS6Q?si=EBSqlYaq1HfYz7p4', '_blank');
                                                    setTimeout(() => {
                                                        setEngageYtVidFour(true)
                                                    }, 5000)
                                                }}>
                                                    Start
                                                </button>
                                            }
                                            {
                                                !task.rewardClaimed && engageYtVidFour &&
                                                <button className={`bg-white text-xs font-OpenSans text-[rgba(0,0,0)] rounded-lg px-4 py-2 rounded-[1px] ${task.rewardClaimed && "opacity-50"}`} onClick={() => {
                                                    claimYtVidFour();
                                                }} disabled={ytVidFourDisabled}>
                                                    Claim
                                                </button>
                                            }
                                            {
                                                task.rewardClaimed &&
                                                <button className={`bg-white text-xs font-OpenSans text-[rgba(0,0,0)] rounded-lg px-4 py-2 rounded-[1px] ${task.rewardClaimed && "opacity-50"}`} disabled={true}>
                                                    Done
                                                </button>
                                            }
                                        </div>
                                    </div>
                                }
                                {
                                    task.claimTreshold === 'five-frens' &&
                                    <div className='flex justify-between py-2 w-full items-center bg-white/20 rounded-md px-3'>
                                        <div className='flex items-center'>
                                            <div className=" w-[50%] small-mobile:w-[5%] mobile:w-[8%]">
                                                <img className="w-full" src={logoBig} alt="" />
                                            </div>
                                            <div className='flex flex-col pl-5'>
                                                <p className='text-white text-bold taskTitle' onClick={() => {}}>Invite 5 frens</p>
                                                <span className='text-[#A6A6A6]'>+5000 $AIDOGS</span>
                                            </div>
                                        </div>
                                        
                                        <div className="">
                                            {
                                                !task.rewardClaimed && !engageFiveFrens &&
                                                <button className={`bg-white text-xs font-OpenSans text-[rgba(0,0,0)] rounded-lg px-4 py-2 rounded-[1px] ${task.rewardClaimed && "opacity-50"}`} onClick={() => {
                                                    setEngageFiveFrens(true)
                                                }}>
                                                    Start
                                                </button>
                                            }
                                            {
                                                !task.rewardClaimed && engageFiveFrens &&
                                                <button className={`bg-white text-xs font-OpenSans text-[rgba(0,0,0)] rounded-lg px-4 py-2 rounded-[1px] ${task.rewardClaimed && "opacity-50"}`} onClick={() => {
                                                    claimFiveFrens();
                                                }} disabled={fiveFrensDisabled}>
                                                    Claim
                                                </button>
                                            }
                                            {
                                                task.rewardClaimed &&
                                                <button className={`bg-white text-xs font-OpenSans text-[rgba(0,0,0)] rounded-lg px-4 py-2 rounded-[1px] ${task.rewardClaimed && "opacity-50"}`} disabled={true}>
                                                    Done
                                                </button>
                                            }
                                        </div>
                                    </div>
                                }
                                {
                                    task.claimTreshold === 'ten-frens' &&
                                    <div className='flex justify-between py-2 w-full items-center bg-white/20 rounded-md px-3'>
                                        <div className='flex items-center'>
                                            <div className=" w-[50%] small-mobile:w-[5%] mobile:w-[8%]">
                                                <img className="w-full" src={logoBig} alt="" />
                                            </div>
                                            <div className='flex flex-col pl-5'>
                                                <p className='text-white text-bold taskTitle' onClick={() => {}}>Invite 10 frens</p>
                                                <span className='text-[#A6A6A6]'>+10000 $AIDOGS</span>
                                            </div>
                                        </div>
                                        
                                        <div className="">
                                            {
                                                !task.rewardClaimed && !engageTenFrens &&
                                                <button className={`bg-white text-xs font-OpenSans text-[rgba(0,0,0)] rounded-lg px-4 py-2 rounded-[1px] ${task.rewardClaimed && "opacity-50"}`} onClick={() => {
                                                    setEngageTenFrens(true)
                                                }}>
                                                    Start
                                                </button>
                                            }
                                            {
                                                !task.rewardClaimed && engageTenFrens &&
                                                <button className={`bg-white text-xs font-OpenSans text-[rgba(0,0,0)] rounded-lg px-4 py-2 rounded-[1px] ${task.rewardClaimed && "opacity-50"}`} onClick={() => {
                                                    claimTenFrens();
                                                }} disabled={tenFrensDisabled}>
                                                    Claim
                                                </button>
                                            }
                                            {
                                                task.rewardClaimed &&
                                                <button className={`bg-white text-xs font-OpenSans text-[rgba(0,0,0)] rounded-lg px-4 py-2 rounded-[1px] ${task.rewardClaimed && "opacity-50"}`} disabled={true}>
                                                    Done
                                                </button>
                                            }
                                        </div>
                                    </div>
                                }
                                {
                                    task.claimTreshold === 'twenty-frens' &&
                                    <div className='flex justify-between py-2 w-full items-center bg-white/20 rounded-md px-3'>
                                        <div className='flex items-center'>
                                            <div className=" w-[50%] small-mobile:w-[5%] mobile:w-[8%]">
                                                <img className="w-full" src={logoBig} alt="" />
                                            </div>
                                            <div className='flex flex-col pl-5'>
                                                <p className='text-white text-bold taskTitle' onClick={() => {}}>Invite 20 frens</p>
                                                <span className='text-[#A6A6A6]'>+20000 $AIDOGS</span>
                                            </div>
                                        </div>
                                        
                                        <div className="">
                                            {
                                                !task.rewardClaimed && !engageTwentyFrens &&
                                                <button className={`bg-white text-xs font-OpenSans text-[rgba(0,0,0)] rounded-lg px-4 py-2 rounded-[1px] ${task.rewardClaimed && "opacity-50"}`} onClick={() => {
                                                    setEngageTwentyFrens(true)
                                                }}>
                                                    Start
                                                </button>
                                            }
                                            {
                                                !task.rewardClaimed && engageTwentyFrens &&
                                                <button className={`bg-white text-xs font-OpenSans text-[rgba(0,0,0)] rounded-lg px-4 py-2 rounded-[1px] ${task.rewardClaimed && "opacity-50"}`} onClick={() => {
                                                    claimTwentyFrens();
                                                }} disabled={twentyFrensDisabled}>
                                                    Claim
                                                </button>
                                            }
                                            {
                                                task.rewardClaimed &&
                                                <button className={`bg-white text-xs font-OpenSans text-[rgba(0,0,0)] rounded-lg px-4 py-2 rounded-[1px] ${task.rewardClaimed && "opacity-50"}`} disabled={true}>
                                                    Done
                                                </button>
                                            }
                                        </div>
                                    </div>
                                }
                                {
                                    task.claimTreshold === 'thirty-frens' &&
                                    <div className='flex justify-between py-2 w-full items-center bg-white/20 rounded-md px-3'>
                                        <div className='flex items-center'>
                                            <div className=" w-[50%] small-mobile:w-[5%] mobile:w-[8%]">
                                                <img className="w-full" src={logoBig} alt="" />
                                            </div>
                                            <div className='flex flex-col pl-5'>
                                                <p className='text-white text-bold taskTitle' onClick={() => {}}>Invite 30 frens</p>
                                                <span className='text-[#A6A6A6]'>+30000 $AIDOGS</span>
                                            </div>
                                        </div>
                                        
                                        <div className="">
                                            {
                                                !task.rewardClaimed && !engageThirtyFrens &&
                                                <button className={`bg-white text-xs font-OpenSans text-[rgba(0,0,0)] rounded-lg px-4 py-2 rounded-[1px] ${task.rewardClaimed && "opacity-50"}`} onClick={() => {
                                                    setEngageThirtyFrens(true)
                                                }}>
                                                    Start
                                                </button>
                                            }
                                            {
                                                !task.rewardClaimed && engageThirtyFrens &&
                                                <button className={`bg-white text-xs font-OpenSans text-[rgba(0,0,0)] rounded-lg px-4 py-2 rounded-[1px] ${task.rewardClaimed && "opacity-50"}`} onClick={() => {
                                                    claimThirtyFrens();
                                                }} disabled={thirtyFrensDisabled}>
                                                    Claim
                                                </button>
                                            }
                                            {
                                                task.rewardClaimed &&
                                                <button className={`bg-white text-xs font-OpenSans text-[rgba(0,0,0)] rounded-lg px-4 py-2 rounded-[1px] ${task.rewardClaimed && "opacity-50"}`} disabled={true}>
                                                    Done
                                                </button>
                                            }
                                        </div>
                                    </div>
                                }
                                {
                                    task.claimTreshold === 'gift-for-tomarket' &&
                                    <div className='flex justify-between py-2 w-full items-center bg-white/20 rounded-md px-3'>
                                        <div className='flex items-center'>
                                            <div className=" w-[50%] small-mobile:w-[5%] mobile:w-[8%]">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" width="20px" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" /></svg>
                                            </div>
                                            <div className='flex flex-col pl-5'>
                                                <p className='text-white text-bold taskTitle' onClick={() => {}}>Celebrate Gift For Tomarket Users</p>
                                                <span className='text-[#A6A6A6]'>+2000 $AIDOGS</span>
                                            </div>
                                        </div>
                                        <div className="">
                                            {
                                                !task.rewardClaimed && !engageToMarketGift &&
                                                <button className={`bg-white text-xs font-OpenSans text-[rgba(0,0,0)] rounded-lg px-4 py-2 rounded-[1px] ${task.rewardClaimed && "opacity-50"}`} onClick={async () => {
                                                    window.open(urlToMarketGift, '_blank');
                                                    setTimeout(() => {
                                                        setEngageToMarketGift(true)
                                                    }, 5000)
                                                }}>
                                                    Share
                                                </button>
                                            }
                                            {
                                                !task.rewardClaimed && engageToMarketGift &&
                                                <button className={`bg-white text-xs font-OpenSans text-[rgba(0,0,0)] rounded-lg px-4 py-2 rounded-[1px] ${task.rewardClaimed && "opacity-50"}`} onClick={() => {
                                                    claimToMarket();
                                                }} disabled={toMarketGiftDisabled}>
                                                    Claim
                                                </button>
                                            }
                                            {
                                                task.rewardClaimed &&
                                                <button className={`bg-white text-xs font-OpenSans text-[rgba(0,0,0)] rounded-lg px-4 py-2 rounded-[1px] ${task.rewardClaimed && "opacity-50"}`} disabled={true}>
                                                    Done
                                                </button>
                                            }
                                        </div>
                                    </div>
                                }
                                {
                                    task.claimTreshold === 'invite-url-tomarket' &&
                                    <div className='flex justify-between py-2 w-full items-center bg-white/20 rounded-md px-3'>
                                        <div className='flex items-center'>
                                            <div className=" w-[50%] small-mobile:w-[5%] mobile:w-[8%]">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" width="20px" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" /></svg>
                                            </div>
                                            <div className='flex flex-col pl-5'>
                                                <p className='text-white text-bold taskTitle' onClick={() => {}}>Send your invite URL to Tomarket</p>
                                                <span className='text-[#A6A6A6]'>+150 $AIDOGS</span>
                                            </div>
                                        </div>
                                        <div className="">
                                            {
                                                !task.rewardClaimed && !engageInviteTomarket &&
                                                <button className={`bg-white text-xs font-OpenSans text-[rgba(0,0,0)] rounded-lg px-4 py-2 rounded-[1px] ${task.rewardClaimed && "opacity-50"}`} onClick={async () => {
                                                    window.open('https://x.com/TomarketFarmer/status/1830637993847378211?s=19', '_blank');
                                                    setTimeout(() => {
                                                        setEngageInviteToMarket(true)
                                                    }, 5000)
                                                }}>
                                                    Start
                                                </button>
                                            }
                                            {
                                                !task.rewardClaimed && engageInviteTomarket &&
                                                <button className={`bg-white text-xs font-OpenSans text-[rgba(0,0,0)] rounded-lg px-4 py-2 rounded-[1px] ${task.rewardClaimed && "opacity-50"}`} onClick={() => {
                                                    claimInviteToMarket();
                                                }} disabled={inviteTomarketDisabled}>
                                                    Claim
                                                </button>
                                            }
                                            {
                                                task.rewardClaimed &&
                                                <button className={`bg-white text-xs font-OpenSans text-[rgba(0,0,0)] rounded-lg px-4 py-2 rounded-[1px] ${task.rewardClaimed && "opacity-50"}`} disabled={true}>
                                                    Done
                                                </button>
                                            }
                                        </div>
                                    </div>
                                }
                                {
                                    task.claimTreshold === 'join-goats' &&
                                    <div className='flex justify-between py-2 w-full items-center bg-white/20 rounded-md px-3'>
                                        <div className='flex items-center'>
                                            <div className=" w-[50%] small-mobile:w-[5%] mobile:w-[8%]">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" width="20px" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" /></svg>
                                            </div>
                                            <div className='flex flex-col pl-5'>
                                                <p className='text-white text-bold taskTitle' onClick={() => {}}>Join GOATS</p>
                                                <span className='text-[#A6A6A6]'>+2000 $AIDOGS</span>
                                            </div>
                                        </div>
                                        <div className="">
                                            {
                                                !task.rewardClaimed && !engageJoinGoats &&
                                                <button className={`bg-white text-xs font-OpenSans text-[rgba(0,0,0)] rounded-lg px-4 py-2 rounded-[1px] ${task.rewardClaimed && "opacity-50"}`} onClick={() => {
                                                    window.open('https://t.me/realgoats_bot/run?startapp=15a53980-df21-4471-94b5-8adb00f41c54', '_blank');
                                                    setTimeout(() => {
                                                        setEngageJoinGoats(true)
                                                    }, 5000)
                                                }}>
                                                    Join
                                                </button>
                                            }
                                            {
                                                !task.rewardClaimed && engageJoinGoats &&
                                                <button className={`bg-white text-xs font-OpenSans text-[rgba(0,0,0)] rounded-lg px-4 py-2 rounded-[1px] ${task.rewardClaimed && "opacity-50"}`} onClick={() => {
                                                    claimJoinGoats();
                                                }} disabled={joinGoatsDisabled}>
                                                    Claim
                                                </button>
                                            }
                                            {
                                                task.rewardClaimed &&
                                                <button className={`bg-white text-xs font-OpenSans text-[rgba(0,0,0)] rounded-lg px-4 py-2 rounded-[1px] ${task.rewardClaimed && "opacity-50"}`} disabled={true}>
                                                    Done
                                                </button>
                                            }
                                        </div>
                                    </div>
                                }
                                {
                                    task.claimTreshold === 'yt-vid-two' &&
                                    <div className='flex justify-between py-2 w-full items-center bg-white/20 rounded-md px-3'>
                                        <div className='flex items-center'>
                                            <div className=" w-[50%] small-mobile:w-[5%] mobile:w-[8%]">
                                                <>
                                                    <svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 50 50" width="25px" height="25px"><rect  x="0" y="0" width="20px" height="20px" style={{fill: 'none'}}/><path d="M24,40l-2,0l0,-1c-0.37,0.438 -0.563,0.574 -0.979,0.782c-0.417,0.233 -0.836,0.218 -1.23,0.218c-0.484,0 -1.034,-0.437 -1.291,-0.765c-0.232,-0.3 -0.5,-0.61 -0.5,-1.235l0,-9l2,0l0,8c0,0.23 0.268,1.007 1,1c0.813,-0.008 0.819,-0.767 1,-1l0,-8l2,0l0,11Zm4,0l-2,0l0,-14l2,0l0,4c0.23,-0.36 0.575,-0.643 0.9,-0.805c0.324,-0.165 0.648,-0.255 0.973,-0.255c0.649,0 1.159,0.23 1.505,0.671c0.349,0.441 0.622,1.026 0.622,1.889l0,6c0,0.741 -0.251,1.202 -0.576,1.6c-0.321,0.392 -0.802,0.894 -1.424,0.9c-1.051,0.011 -1.614,-0.549 -2,-1l0,1Zm-11,-12l-2,0l0,12l-2,0l0,-12l-2,0l0,-2l6,0l0,2Zm18,7l0,1.546c0,0.557 0.075,0.917 0.216,1.126c0.138,0.23 0.417,0.332 0.784,0.328c0.406,-0.004 0.663,-0.085 0.801,-0.269c0.14,-0.165 0.199,-0.628 0.199,-1.231l0,-0.5l2,0l0,0.592c0,1.093 -0.088,1.902 -0.624,2.435c-0.508,0.557 -1.3,0.815 -2.338,0.815c-0.951,0 -1.692,-0.279 -2.227,-0.858c-0.53,-0.579 -0.808,-1.369 -0.808,-2.392l0,-4.708c0,-0.904 0.317,-1.574 0.9,-2.173c0.467,-0.479 1.346,-0.711 2.295,-0.711c0.951,0 1.617,0.201 2.122,0.734c0.514,0.533 0.68,1.152 0.68,2.15l0,3.116l-4,0Zm-5,-3c0,-1.001 -0.448,-1.5 -1,-1.5c-0.552,0 -0.991,0.497 -1,1l0,6c0.009,0.288 0.448,0.5 1,0.5c0.552,0 1,-0.425 1,-0.977l0,-5.023Zm7,1l0,-1c0,-0.615 -0.448,-1 -1,-1c-0.552,0 -0.991,0.463 -1,1l0,1l2,0Z"/><path d="M19,5l-2,6l-2,-6l-2,0l3,9l0,6l2,0l0,-6l3,-9l-2,0Zm6,12c0,0.969 -0.676,1 -1,1c-0.3,0 -1,-0.013 -1,-1l0,-5c0,-0.815 0.433,-1 1,-1c0.3,0 1,-0.002 1,1l0,5Zm1.24,-7.278c-0.627,-0.576 -1.27,-0.722 -2.24,-0.722c-1.068,0 -1.591,0.168 -2.242,0.701c-0.625,0.53 -0.799,0.937 -0.758,2.299l0,5c0,0.996 0.162,1.652 0.765,2.236c0.625,0.579 1.216,0.764 2.235,0.764c1.065,0 1.648,-0.184 2.248,-0.765c0.627,-0.558 0.752,-1.237 0.752,-2.235l0,-5c0,-0.882 -0.157,-1.721 -0.76,-2.278Zm6.76,-0.722l0,8c-0.011,0.683 -0.816,1 -1,1c-0.208,0 -1,-0.042 -1,-1l0,-8l-2,0l0,9c0,0.972 0.98,2 2,2c1.02,0 1.559,-0.513 2,-1l0,1l2,0l0,-11l-2,0Z" style={{fillRule: 'nonzero'}}/><path d="M40.584,22.001c0.709,0.011 1.415,0.108 2.091,0.329c0.546,0.179 1.067,0.437 1.535,0.773c0.529,0.381 0.985,0.861 1.339,1.409c0.248,0.384 0.446,0.8 0.594,1.233c0.24,0.699 0.345,1.433 0.357,2.171c0.017,3.417 0.052,6.836 -0.002,10.253c-0.019,0.733 -0.132,1.463 -0.379,2.156c-0.153,0.43 -0.356,0.842 -0.609,1.222c-0.361,0.544 -0.823,1.017 -1.358,1.391c-0.452,0.316 -0.953,0.56 -1.477,0.732c-0.649,0.212 -1.327,0.311 -2.007,0.328c-10.111,0.158 -20.226,0.191 -30.336,0c-0.609,-0.019 -1.213,-0.116 -1.792,-0.312c-0.402,-0.136 -0.789,-0.318 -1.15,-0.541c-0.293,-0.181 -0.568,-0.389 -0.822,-0.62c-0.88,-0.8 -1.487,-1.864 -1.802,-3.005c-0.166,-0.604 -0.248,-1.226 -0.264,-1.851c-0.051,-3.279 -0.052,-6.559 0,-9.838c0.019,-0.733 0.132,-1.463 0.379,-2.156c0.153,-0.43 0.356,-0.842 0.609,-1.222c0.361,-0.543 0.823,-1.017 1.358,-1.391c0.452,-0.316 0.953,-0.56 1.477,-0.732c0.649,-0.212 1.327,-0.31 2.007,-0.328c10.083,-0.158 20.168,-0.054 30.252,-0.001Zm-30.079,1.999c-0.425,0.002 -0.849,0.043 -1.262,0.146c-0.641,0.16 -1.244,0.469 -1.708,0.944c-0.161,0.166 -0.305,0.349 -0.427,0.544c-0.167,0.266 -0.296,0.555 -0.391,0.855c-0.148,0.468 -0.209,0.957 -0.217,1.447c-0.016,3.231 -0.05,6.461 0.001,9.691c0.012,0.441 0.067,0.88 0.179,1.307c0.21,0.798 0.619,1.552 1.233,2.111c0.164,0.149 0.341,0.283 0.529,0.399c0.232,0.144 0.481,0.26 0.739,0.348c0.407,0.137 0.832,0.2 1.26,0.208c10.061,0.063 20.124,0.157 30.185,-0.001c0.398,-0.011 0.795,-0.057 1.182,-0.158c0.621,-0.163 1.206,-0.469 1.657,-0.931c0.151,-0.155 0.286,-0.325 0.404,-0.507c0.169,-0.262 0.301,-0.547 0.398,-0.844c0.153,-0.462 0.219,-0.946 0.232,-1.432c0.054,-3.417 0.054,-6.836 0,-10.254c-0.013,-0.485 -0.079,-0.97 -0.232,-1.432c-0.097,-0.297 -0.229,-0.582 -0.398,-0.844c-0.118,-0.182 -0.253,-0.352 -0.404,-0.507c-0.451,-0.462 -1.036,-0.768 -1.657,-0.931c-0.387,-0.101 -0.784,-0.147 -1.182,-0.158c-10.039,-0.157 -20.081,-0.001 -30.121,-0.001Z" style={{fillRule:'nonzero'}}/></svg>
                                                </>
                                            </div>
                                            <div className='flex flex-col pl-5'>
                                                <p className='text-white text-bold taskTitle' onClick={() => {}}>Watch YouTube Video</p>
                                                <span className='text-[#A6A6A6]'>+1000 $AIDOGS</span>
                                            </div>
                                        </div>
                                        
                                        <div className="">
                                            {
                                                !task.rewardClaimed && !engageYtVidTwo &&
                                                <button className={`bg-white text-xs font-OpenSans text-[rgba(0,0,0)] rounded-lg px-4 py-2 rounded-[1px] ${task.rewardClaimed && "opacity-50"}`} onClick={() => {window.open('https://youtu.be/ssZfO6PAyDs?si=3QWEeILtunO8qOKs', '_blank');
                                                    setTimeout(() => {
                                                        setEngageYtVidTwo(true)
                                                    }, 5000)
                                                }}>
                                                    Start
                                                </button>
                                            }
                                            {
                                                !task.rewardClaimed && engageYtVidTwo &&
                                                <button className={`bg-white text-xs font-OpenSans text-[rgba(0,0,0)] rounded-lg px-4 py-2 rounded-[1px] ${task.rewardClaimed && "opacity-50"}`} onClick={() => {
                                                    claimYtVidTwo();
                                                }} disabled={ytVidTwoDisabled}>
                                                    Claim
                                                </button>
                                            }
                                            {
                                                task.rewardClaimed &&
                                                <button className={`bg-white text-xs font-OpenSans text-[rgba(0,0,0)] rounded-lg px-4 py-2 rounded-[1px] ${task.rewardClaimed && "opacity-50"}`} disabled={true}>
                                                    Done
                                                </button>
                                            }
                                        </div>
                                    </div>
                                }
                                {/*
                                    task.claimTreshold === 'follow-birds-x' &&
                                    <div className='flex justify-between py-2 w-full items-center bg-white/20 rounded-md px-3'>
                                        <div className='flex items-center'>
                                            <div className=" w-[50%] small-mobile:w-[5%] mobile:w-[8%]">
                                                <img className="w-full" src={logoBig} alt="" />
                                            </div>
                                            <div className='flex flex-col pl-5'>
                                                <p className='text-white text-bold taskTitle' onClick={() => {}}>Follow Birds on X</p>
                                                <span className='text-[#A6A6A6]'>+150 $AIDOGS</span>
                                            </div>
                                        </div>
                                        <div className="">
                                            {
                                                !task.rewardClaimed && !engageFollowBirds &&
                                                <button className={`bg-white text-xs font-OpenSans text-[rgba(0,0,0)] rounded-lg px-4 py-2 rounded-[1px] ${task.rewardClaimed && "opacity-50"}`} onClick={() => {
                                                    window.open('https://x.com/TheBirdsDogs', '_blank');
                                                    setTimeout(() => {
                                                        setEngageFollowBirds(true)
                                                    }, 5000)
                                                }}>
                                                    Follow
                                                </button>
                                            }
                                            {
                                                !task.rewardClaimed && engageFollowBirds &&
                                                <button className={`bg-white text-xs font-OpenSans text-[rgba(0,0,0)] rounded-lg px-4 py-2 rounded-[1px] ${task.rewardClaimed && "opacity-50"}`} onClick={() => {
                                                    claimFollowBirds();
                                                }} disabled={followBirdsDisabled}>
                                                    Claim
                                                </button>
                                            }
                                            {
                                                task.rewardClaimed &&
                                                <button className={`bg-white text-xs font-OpenSans text-[rgba(0,0,0)] rounded-lg px-4 py-2 rounded-[1px] ${task.rewardClaimed && "opacity-50"}`} disabled={true}>
                                                    Done
                                                </button>
                                            }
                                        </div>
                                    </div>
                                }
                                {
                                    task.claimTreshold === 'sub-birds-yt' &&
                                    <div className='flex justify-between py-2 w-full items-center bg-white/20 rounded-md px-3'>
                                        <div className='flex items-center'>
                                            <div className=" w-[50%] small-mobile:w-[5%] mobile:w-[8%]">
                                                <img className="w-full" src={logoBig} alt="" />
                                            </div>
                                            <div className='flex flex-col pl-5'>
                                                <p className='text-white text-bold taskTitle' onClick={() => {}}>Join Birds Telegram</p>
                                                <span className='text-[#A6A6A6]'>+150 $AIDOGS</span>
                                            </div>
                                        </div>
                                        
                                        <div className="">
                                            {
                                                !task.rewardClaimed && !engageYoutubeBirds &&
                                                <button className={`bg-white text-xs font-OpenSans text-[rgba(0,0,0)] rounded-lg px-4 py-2 rounded-[1px] ${task.rewardClaimed && "opacity-50"}`} onClick={() => {window.open('https://t.me/+PLeoc54Kw5oxN2M9', '_blank');
                                                    setTimeout(() => {
                                                        setEngageYoutubeBirds(true)
                                                    }, 5000)
                                                }}>
                                                    Start
                                                </button>
                                            }
                                            {
                                                !task.rewardClaimed && engageYoutubeBirds &&
                                                <button className={`bg-white text-xs font-OpenSans text-[rgba(0,0,0)] rounded-lg px-4 py-2 rounded-[1px] ${task.rewardClaimed && "opacity-50"}`} onClick={() => {
                                                    claimYoutubeBirds();
                                                }} disabled={youtubeBirdsDisabled}>
                                                    Claim
                                                </button>
                                            }
                                            {
                                                task.rewardClaimed &&
                                                <button className={`bg-white text-xs font-OpenSans text-[rgba(0,0,0)] rounded-lg px-4 py-2 rounded-[1px] ${task.rewardClaimed && "opacity-50"}`} disabled={true}>
                                                    Done
                                                </button>
                                            }
                                        </div>
                                    </div>
                                }
                                {
                                    task.claimTreshold === 'play-birds' &&
                                    <div className='flex justify-between py-2 w-full items-center bg-white/20 rounded-md px-3'>
                                        <div className='flex items-center'>
                                            <div className=" w-[50%] small-mobile:w-[5%] mobile:w-[8%]">
                                                <img className="w-full" src={logoBig} alt="" />
                                            </div>
                                            <div className='flex flex-col pl-5'>
                                                <p className='text-white text-bold taskTitle' onClick={() => {}}>Play BIRDS</p>
                                                <span className='text-[#A6A6A6]'>+150 $AIDOGS</span>
                                            </div>
                                        </div>
                                        
                                        <div className="">
                                            {
                                                !task.rewardClaimed && !engagePlayBirds &&
                                                <button className={`bg-white text-xs font-OpenSans text-[rgba(0,0,0)] rounded-lg px-4 py-2 rounded-[1px] ${task.rewardClaimed && "opacity-50"}`} onClick={() => {window.open('https://t.me/birdx2_bot/birdx?startapp=1920150983', '_blank');
                                                    setTimeout(() => {
                                                        setEngagePlayBirds(true)
                                                    }, 5000)
                                                }}>
                                                    Start
                                                </button>
                                            }
                                            {
                                                !task.rewardClaimed && engagePlayBirds &&
                                                <button className={`bg-white text-xs font-OpenSans text-[rgba(0,0,0)] rounded-lg px-4 py-2 rounded-[1px] ${task.rewardClaimed && "opacity-50"}`} onClick={() => {
                                                    claimPlayBirds();
                                                }} disabled={playBirdsDisabled}>
                                                    Claim
                                                </button>
                                            }
                                            {
                                                task.rewardClaimed &&
                                                <button className={`bg-white text-xs font-OpenSans text-[rgba(0,0,0)] rounded-lg px-4 py-2 rounded-[1px] ${task.rewardClaimed && "opacity-50"}`} disabled={true}>
                                                    Done
                                                </button>
                                            }
                                        </div>
                                    </div>
                                */}
                                {/*
                                    task.claimTreshold === 'ton-ai' &&
                                    <div className='flex justify-between py-2 w-full items-center bg-white/20 rounded-md px-3'>
                                        <div className='flex items-center'>
                                            <div className=" w-[50%] small-mobile:w-[5%] mobile:w-[8%]">
                                                <img className="w-full" src={logoBig} alt="" />
                                            </div>
                                            <div className='flex flex-col pl-5'>
                                                <p className='text-white text-bold taskTitle' onClick={() => {}}>Join TonAi</p>
                                                <span className='text-[#A6A6A6]'>+2000 $AIDOGS</span>
                                            </div>
                                        </div>
                                        <div className="">
                                            {
                                                !task.rewardClaimed && !engageJoinTonAi &&
                                                <button className={`bg-white text-xs font-OpenSans text-[rgba(0,0,0)] rounded-lg px-4 py-2 rounded-[1px] ${task.rewardClaimed && "opacity-50"}`} onClick={() => {
                                                    window.open('https://t.me/PeaAIBot/App?startapp=sid-66d828e3841369003ba7e67b', '_blank');
                                                    setTimeout(() => {
                                                        setEngageJoinTonAi(true)
                                                    }, 5000)
                                                }}>
                                                    Join
                                                </button>
                                            }
                                            {
                                                !task.rewardClaimed && engageJoinTonAi &&
                                                <button className={`bg-white text-xs font-OpenSans text-[rgba(0,0,0)] rounded-lg px-4 py-2 rounded-[1px] ${task.rewardClaimed && "opacity-50"}`} onClick={() => {
                                                    claimJoinTonAi();
                                                }} disabled={joinTonAiDisabled}>
                                                    Claim
                                                </button>
                                            }
                                            {
                                                task.rewardClaimed &&
                                                <button className={`bg-white text-xs font-OpenSans text-[rgba(0,0,0)] rounded-lg px-4 py-2 rounded-[1px] ${task.rewardClaimed && "opacity-50"}`} disabled={true}>
                                                    Done
                                                </button>
                                            }
                                        </div>
                                    </div>
                                */}
                                {
                                    task.claimTreshold === 'hold-coin-bot' &&
                                    <div className='flex justify-between py-2 w-full items-center bg-white/20 rounded-md px-3'>
                                        <div className='flex items-center'>
                                            <div className=" w-[50%] small-mobile:w-[5%] mobile:w-[8%]">
                                            <img className="w-full" src={logoBig} alt="" />
                                            </div>
                                            <div className='flex flex-col pl-5'>
                                                <p className='text-white text-bold taskTitle' onClick={() => {}}>Play HoldCoin</p>
                                                <span className='text-[#A6A6A6]'>+2000 $AIDOGS</span>
                                            </div>
                                        </div>
                                        <div className="">
                                            {
                                                !task.rewardClaimed && !engageHoldCoin &&
                                                <button className={`bg-white text-xs font-OpenSans text-[rgba(0,0,0)] rounded-lg px-4 py-2 rounded-[1px] ${task.rewardClaimed && "opacity-50"}`} onClick={() => {
                                                    window.open('https://t.me/theHoldCoinBot/app?startapp=ref_yoiyTgVL', '_blank');
                                                    setTimeout(() => {
                                                        setEngageHoldCoin(true)
                                                    }, 5000)
                                                }}>
                                                    Join
                                                </button>
                                            }
                                            {
                                                !task.rewardClaimed && engageHoldCoin &&
                                                <button className={`bg-white text-xs font-OpenSans text-[rgba(0,0,0)] rounded-lg px-4 py-2 rounded-[1px] ${task.rewardClaimed && "opacity-50"}`} onClick={() => {
                                                    claimHoldCoin();
                                                }} disabled={holdCoinDisabled}>
                                                    Claim
                                                </button>
                                            }
                                            {
                                                task.rewardClaimed &&
                                                <button className={`bg-white text-xs font-OpenSans text-[rgba(0,0,0)] rounded-lg px-4 py-2 rounded-[1px] ${task.rewardClaimed && "opacity-50"}`} disabled={true}>
                                                    Done
                                                </button>
                                            }
                                        </div>
                                    </div>
                                }
                                {
                                    task.claimTreshold === 'hold-coin-channel' &&
                                    <div className='flex justify-between py-2 w-full items-center bg-white/20 rounded-md px-3'>
                                        <div className='flex items-center'>
                                            <div className=" w-[50%] small-mobile:w-[5%] mobile:w-[8%]">
                                            <img className="w-full" src={logoBig} alt="" />
                                            </div>
                                            <div className='flex flex-col pl-5'>
                                                <p className='text-white text-bold taskTitle' onClick={() => {}}>Join HoldCoin Channel</p>
                                                <span className='text-[#A6A6A6]'>+150 $AIDOGS</span>
                                            </div>
                                        </div>
                                        <div className="">
                                            {
                                                !task.rewardClaimed && !engageHoldCoinChannel &&
                                                <button className={`bg-white text-xs font-OpenSans text-[rgba(0,0,0)] rounded-lg px-4 py-2 rounded-[1px] ${task.rewardClaimed && "opacity-50"}`} onClick={() => {
                                                    window.open('https://t.me/+hp2cVksOOh9lN2Q1', '_blank');
                                                    setTimeout(() => {
                                                        setEngageHoldCoinChannel(true)
                                                    }, 5000)
                                                }}>
                                                    Join
                                                </button>
                                            }
                                            {
                                                !task.rewardClaimed && engageHoldCoinChannel &&
                                                <button className={`bg-white text-xs font-OpenSans text-[rgba(0,0,0)] rounded-lg px-4 py-2 rounded-[1px] ${task.rewardClaimed && "opacity-50"}`} onClick={() => {
                                                    claimHoldCoinChannel();
                                                }} disabled={holdCoinChannelDisabled}>
                                                    Claim
                                                </button>
                                            }
                                            {
                                                task.rewardClaimed &&
                                                <button className={`bg-white text-xs font-OpenSans text-[rgba(0,0,0)] rounded-lg px-4 py-2 rounded-[1px] ${task.rewardClaimed && "opacity-50"}`} disabled={true}>
                                                    Done
                                                </button>
                                            }
                                        </div>
                                    </div>
                                }
                                {
                                    task.claimTreshold === 'rt-tag-three-frens-five' &&
                                    <div className='flex justify-between py-2 w-full items-center bg-white/20 rounded-md px-3'>
                                        <div className='flex items-center'>
                                            <div className=" w-[50%] small-mobile:w-[5%] mobile:w-[8%]">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" width="20px" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" /></svg>
                                            </div>
                                            <div className='flex flex-col pl-5'>
                                                <p className='text-white text-bold taskTitle' onClick={() => {}}>RT and Tag 3 frens</p>
                                                <span className='text-[#A6A6A6]'>+150 $AIDOGS</span>
                                            </div>
                                        </div>
                                        <div className="">
                                            {
                                                !task.rewardClaimed && !engageRtTagThreeFrensFive &&
                                                <button className={`bg-white text-xs font-OpenSans text-[rgba(0,0,0)] rounded-lg px-4 py-2 rounded-[1px] ${task.rewardClaimed && "opacity-50"}`} onClick={async () => {
                                                    window.open('https://x.com/aidogscomm/status/1832376968999747746?s=19', '_blank');
                                                    setTimeout(() => {
                                                        setEngageRtTagThreeFrensFive(true)
                                                    }, 5000)
                                                }}>
                                                    Start
                                                </button>
                                            }
                                            {
                                                !task.rewardClaimed && engageRtTagThreeFrensFive &&
                                                <button className={`bg-white text-xs font-OpenSans text-[rgba(0,0,0)] rounded-lg px-4 py-2 rounded-[1px] ${task.rewardClaimed && "opacity-50"}`} onClick={() => {
                                                    claimRtTagThreeFrensFive();
                                                }} disabled={rtTagThreeFrensFiveDisabled}>
                                                    Claim
                                                </button>
                                            }
                                            {
                                                task.rewardClaimed &&
                                                <button className={`bg-white text-xs font-OpenSans text-[rgba(0,0,0)] rounded-lg px-4 py-2 rounded-[1px] ${task.rewardClaimed && "opacity-50"}`} disabled={true}>
                                                    Done
                                                </button>
                                            }
                                        </div>
                                    </div>
                                }
                                {/*
                                    task.claimTreshold === 'pigs-bot' &&
                                    <div className='flex justify-between py-2 w-full items-center bg-white/20 rounded-md px-3'>
                                        <div className='flex items-center'>
                                            <div className=" w-[50%] small-mobile:w-[5%] mobile:w-[8%]">
                                            <img className="w-full" src={logoBig} alt="" />
                                            </div>
                                            <div className='flex flex-col pl-5'>
                                                <p className='text-white text-bold taskTitle' onClick={() => {}}>Join Pigs</p>
                                                <span className='text-[#A6A6A6]'>+2000 $AIDOGS</span>
                                            </div>
                                        </div>
                                        <div className="">
                                            {
                                                !task.rewardClaimed && !engagePigsBot &&
                                                <button className={`bg-white text-xs font-OpenSans text-[rgba(0,0,0)] rounded-lg px-4 py-2 rounded-[1px] ${task.rewardClaimed && "opacity-50"}`} onClick={() => {
                                                    window.open('https://t.me/PigshouseBot?start=6374484959', '_blank');
                                                    setTimeout(() => {
                                                        setEngagePigsBot(true)
                                                    }, 5000)
                                                }}>
                                                    Join
                                                </button>
                                            }
                                            {
                                                !task.rewardClaimed && engagePigsBot &&
                                                <button className={`bg-white text-xs font-OpenSans text-[rgba(0,0,0)] rounded-lg px-4 py-2 rounded-[1px] ${task.rewardClaimed && "opacity-50"}`} onClick={() => {
                                                    claimPigsBot();
                                                }} disabled={pigsBotDisabled}>
                                                    Claim
                                                </button>
                                            }
                                            {
                                                task.rewardClaimed &&
                                                <button className={`bg-white text-xs font-OpenSans text-[rgba(0,0,0)] rounded-lg px-4 py-2 rounded-[1px] ${task.rewardClaimed && "opacity-50"}`} disabled={true}>
                                                    Done
                                                </button>
                                            }
                                        </div>
                                    </div>
                                */}
                                {/*
                                    task.claimTreshold === 'pigs-channel' &&
                                    <div className='flex justify-between py-2 w-full items-center bg-white/20 rounded-md px-3'>
                                        <div className='flex items-center'>
                                            <div className=" w-[50%] small-mobile:w-[5%] mobile:w-[8%]">
                                            <img className="w-full" src={logoBig} alt="" />
                                            </div>
                                            <div className='flex flex-col pl-5'>
                                                <p className='text-white text-bold taskTitle' onClick={() => {}}>Join Pigs Tg Channel</p>
                                                <span className='text-[#A6A6A6]'>+150 $AIDOGS</span>
                                            </div>
                                        </div>
                                        <div className="">
                                            {
                                                !task.rewardClaimed && !engagePigsChannel &&
                                                <button className={`bg-white text-xs font-OpenSans text-[rgba(0,0,0)] rounded-lg px-4 py-2 rounded-[1px] ${task.rewardClaimed && "opacity-50"}`} onClick={() => {
                                                    window.open('https://t.me/+O-k5HRrBaMI1NjZk', '_blank');
                                                    setTimeout(() => {
                                                        setEngagePigsChannel(true)
                                                    }, 5000)
                                                }}>
                                                    Join
                                                </button>
                                            }
                                            {
                                                !task.rewardClaimed && engagePigsChannel &&
                                                <button className={`bg-white text-xs font-OpenSans text-[rgba(0,0,0)] rounded-lg px-4 py-2 rounded-[1px] ${task.rewardClaimed && "opacity-50"}`} onClick={() => {
                                                    claimPigsChannel();
                                                }} disabled={pigsChannelDisabled}>
                                                    Claim
                                                </button>
                                            }
                                            {
                                                task.rewardClaimed &&
                                                <button className={`bg-white text-xs font-OpenSans text-[rgba(0,0,0)] rounded-lg px-4 py-2 rounded-[1px] ${task.rewardClaimed && "opacity-50"}`} disabled={true}>
                                                    Done
                                                </button>
                                            }
                                        </div>
                                    </div>
                                */}
                                {/*
                                    task.claimTreshold === 'ton-party-bot' &&
                                    <div className='flex justify-between py-2 w-full items-center bg-white/20 rounded-md px-3'>
                                        <div className='flex items-center'>
                                            <div className=" w-[50%] small-mobile:w-[5%] mobile:w-[8%]">
                                            <img className="w-full" src={logoBig} alt="" />
                                            </div>
                                            <div className='flex flex-col pl-5'>
                                                <p className='text-white text-bold taskTitle' onClick={() => {}}>Join TonParty</p>
                                                <span className='text-[#A6A6A6]'>+2000 $AIDOGS</span>
                                            </div>
                                        </div>
                                        <div className="">
                                            {
                                                !task.rewardClaimed && !engageTonPartyBot &&
                                                <button className={`bg-white text-xs font-OpenSans text-[rgba(0,0,0)] rounded-lg px-4 py-2 rounded-[1px] ${task.rewardClaimed && "opacity-50"}`} onClick={() => {
                                                    window.open('https://t.me/tonparty_bot/party?startapp=ref_Ub5gbwDL', '_blank');
                                                    setTimeout(() => {
                                                        setEngageTonPartyBot(true)
                                                    }, 5000)
                                                }}>
                                                    Join
                                                </button>
                                            }
                                            {
                                                !task.rewardClaimed && engageTonPartyBot &&
                                                <button className={`bg-white text-xs font-OpenSans text-[rgba(0,0,0)] rounded-lg px-4 py-2 rounded-[1px] ${task.rewardClaimed && "opacity-50"}`} onClick={() => {
                                                    claimTonPartyBot();
                                                }} disabled={tonPartyBotDisabled}>
                                                    Claim
                                                </button>
                                            }
                                            {
                                                task.rewardClaimed &&
                                                <button className={`bg-white text-xs font-OpenSans text-[rgba(0,0,0)] rounded-lg px-4 py-2 rounded-[1px] ${task.rewardClaimed && "opacity-50"}`} disabled={true}>
                                                    Done
                                                </button>
                                            }
                                        </div>
                                    </div>
                                }
                                {
                                    task.claimTreshold === 'ton-party-channel' &&
                                    <div className='flex justify-between py-2 w-full items-center bg-white/20 rounded-md px-3'>
                                        <div className='flex items-center'>
                                            <div className=" w-[50%] small-mobile:w-[5%] mobile:w-[8%]">
                                            <img className="w-full" src={logoBig} alt="" />
                                            </div>
                                            <div className='flex flex-col pl-5'>
                                                <p className='text-white text-bold taskTitle' onClick={() => {}}>Join TonParty Tg Channel</p>
                                                <span className='text-[#A6A6A6]'>+150 $AIDOGS</span>
                                            </div>
                                        </div>
                                        <div className="">
                                            {
                                                !task.rewardClaimed && !engageTonPartyChannel &&
                                                <button className={`bg-white text-xs font-OpenSans text-[rgba(0,0,0)] rounded-lg px-4 py-2 rounded-[1px] ${task.rewardClaimed && "opacity-50"}`} onClick={() => {
                                                    window.open('https://t.me/+5ITZoOxz9io1NWVk', '_blank');
                                                    setTimeout(() => {
                                                        setEngageTonPartyChannel(true)
                                                    }, 5000)
                                                }}>
                                                    Join
                                                </button>
                                            }
                                            {
                                                !task.rewardClaimed && engageTonPartyChannel &&
                                                <button className={`bg-white text-xs font-OpenSans text-[rgba(0,0,0)] rounded-lg px-4 py-2 rounded-[1px] ${task.rewardClaimed && "opacity-50"}`} onClick={() => {
                                                    claimTonPartyChannel();
                                                }} disabled={tonPartyChannelDisabled}>
                                                    Claim
                                                </button>
                                            }
                                            {
                                                task.rewardClaimed &&
                                                <button className={`bg-white text-xs font-OpenSans text-[rgba(0,0,0)] rounded-lg px-4 py-2 rounded-[1px] ${task.rewardClaimed && "opacity-50"}`} disabled={true}>
                                                    Done
                                                </button>
                                            }
                                        </div>
                                    </div>
                                */}
                            </>
                        ))
                    }

                    <div className='flex justify-between py-2 w-full items-center'>
                        <div className='flex items-center'>
                            <div className=" w-[50%] small-mobile:w-[5%] mobile:w-[8%]">
                                <img className="w-full" src={logoBig} alt="" />

                            </div>
                            <div className='flex flex-col pl-3'>
                                <p className='text-white text-bold'>Your Referrals</p>
                                <span className='text-[#A6A6A6]'></span>
                            </div>
                        </div>
                        <div className="">
                            <p className='text-white pr-5'>
                                {referees}
                            </p>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
            <BottomSheet isOpen={isBottomSheetOpen} onClose={handleCloseBottomSheet}>
                <h2 className="text-xl font-bold text-white text-center">Claim Daily Reward</h2>
                <p className="text-xs font-bold text-white text-center">Click on any day to claim, if you are eligible for that day you will recieve your rewards</p>
                
                <div className="my-4 grid grid-cols-4">
                    {
                        dailyLoginTasks.map((task: any, idx: any) => (
                            idx !== 7 && idx !== 8 && idx !== 9 &&
                            <div className={`flex flex-col gap-1 rounded-md bg-white/20 ${isFirstUnclaimedReward(dailyLoginTasks, idx) && pointsToday < 1 ? 'border border-white' : ''} text-white m-1 p-1 cursor-pointer`} onClick={() => {
                                if (task.rewardClaimed) {
                                    toast(`You have claimed points for today`, {
                                        className: "",
                                        duration: 799,
                                        style: {
                                        background: "#363636",
                                        color: "#fff",
                                        },
                                    });
                                }
                                if (isFirstUnclaimedReward(dailyLoginTasks, idx) && pointsToday < 1) {
                                    toast(`Claiming for day ${idx + 1}, please wait....`, {
                                        className: "",
                                        duration: 799,
                                        style: {
                                        background: "#363636",
                                        color: "#fff",
                                        },
                                    });
                                    claimDailyTask(dailyLoginTasks, idx)
                                } else if (isFirstUnclaimedReward(dailyLoginTasks, idx) && (pointsToday > 0 || pointsToday === 1)) {
                                    toast(`You have claimed points for today`, {
                                        className: "",
                                        duration: 799,
                                        style: {
                                        background: "#363636",
                                        color: "#fff",
                                        },
                                    });
                                } else if (!isFirstUnclaimedReward(dailyLoginTasks, idx)) {
                                    toast(`You are not yet eligible to claim for day ${idx + 1}`, {
                                        className: "",
                                        duration: 799,
                                        style: {
                                        background: "#363636",
                                        color: "#fff",
                                        },
                                    });
                                }
                            }}>
                                <p className='text-center text-white text-xs'>Day {idx + 1}</p>
                                <div className="flex justify-center items-center w-[30%] mx-auto">
                                    <img className="w-full" src={logoBig} alt="" />
                                </div>
                                <p className="text-white text-sm text-center font-smeibold">{
                                    <>
                                        {idx === 0 && 75}
                                        {idx === 1 && 100}
                                        {idx === 2 && 125}
                                        {idx === 3 && 150}
                                        {idx === 4 && 175}
                                        {idx === 5 && 200}
                                        {idx === 6 && 300}
                                    </>    
                                }</p>
                            </div>
                        ))
                    }
                </div>
            </BottomSheet>
        </div>
    );
};

export default HomeTab;
