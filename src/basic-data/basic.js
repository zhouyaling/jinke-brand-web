// 各省市数据
const provinceData = [
    { province: "新疆", className: "Z-SF1" },
    { province: "西藏", className: "Z-SF2" },
    { province: "甘肃省", className: "Z-SF3" },
    { province: "青海", className: "Z-SF4" },
    { province: "内蒙古", className: "Z-SF5" },
    { province: "宁夏", className: "Z-SF6" },
    { province: "四川省", className: "Z-SF7" },
    { province: "云南省", className: "Z-SF8" },
    { province: "山西省", className: "Z-SF9" },
    { province: "陕西省", className: "Z-SF10" },
    { province: "湖北省", className: "Z-SF11" },
    { province: "重庆", className: "Z-SF12" },
    { province: "重庆市", className: "Z-SF12" },
    { province: "贵州省", className: "Z-SF13" },
    { province: "广西省", className: "Z-SF14" },
    { province: "北京市", className: "Z-SF15" },
    { province: "河北省", className: "Z-SF16" },
    { province: "河南省", className: "Z-SF17" },
    { province: "湖南省", className: "Z-SF18" },
    { province: "广东省", className: "Z-SF19" },
    { province: "天津市", className: "Z-SF20" },
    { province: "山东省", className: "Z-SF21" },
    { province: "江苏省", className: "Z-SF22" },
    { province: "安徽省", className: "Z-SF23" },
    { province: "上海市", className: "Z-SF24" },
    { province: "浙江省", className: "Z-SF25" },
    { province: "江西省", className: "Z-SF26" },
    { province: "福建省", className: "Z-SF27" },
    { province: "黑龙江省", className: "Z-SF28" },
    { province: "吉林省", className: "Z-SF29" },
    { province: "辽宁省", className: "Z-SF30" },
    { province: "台湾", className: "Z-SF31" },
    { province: "香港", className: "Z-SF32" },
    { province: "澳门", className: "Z-SF33" },
    { province: "海南省", className: "Z-SF34" }
];

// 满意度数据
const satisfiedData = [
    { numbr: 1, name: '金科花园' },
    { numbr: 2, name: '金科丽苑' },
    { numbr: 3, name: '金砂水岸' },
    { numbr: 4, name: '中央华府' },
    { numbr: 5, name: '东方王榭' }
];

//当月数据
const monthData = { monthPercent: 98.3, monthDevice: 3678, monthPerfect: 3358 };

//设备运行警示数据
const deviceData = [
    { number: 6, maxNum: 500 },
    { number: 1, maxNum: 500 },
    { number: 3, maxNum: 500 },
];

//告警信息 次数、台数、时长
const warnData = { taiNum: 84, frequency: 1145, avgTime: 0.55 };

// 语音文字集合
const audioText = {
    textA: `作为全国品牌前三强的金科物业,自2016年就启动了“天启计划”。我们基于“大数据、云计算和人工智能”对社区进行智慧化管理。管理维度现已涉及人、车、物和服务品质。`,
    textB: `您是物业服务的核心，我们在保障您出入安全方面是怎么样做的呢？我们来看看天湖美镇吧，我们在每个人行出入口设置了天启智能门，可及时统计人行出入数量及安全管理。天启智能门不仅提供蓝牙、密码、人脸识别等功能，还具备防跟随报警、紧急呼叫和24小时监控功能。
            在车辆出入安全方面，金科物业为您的爱车提供“360度”的管理服务。我们通过大数据分析技术，自动将车辆信息有效与您进行关联，同时对车辆进行24小时监控预警，并且还为您提供车位临时租赁服务，让您的车位在未使用期间也能增加经济效益。
            在解决您的问询即求助方面，我们提供24小时在线管家服务，那就是我啦，可以直接通过APP呼叫小金，并且我们能在5分钟内立即响应您通过掌上App发出的“报事报修”状况。
            在方便您生活缴费方面，我们是业内首家打通支付宝、微信及银联的全通道缴费平台，您可以实现在线付、预缴、代扣等多种方式
            您居住安心，我们才更加放心，金科物业对社区中各类设施设备进行“垂直”式管理,我们通过对电梯、给排水、机房、消防管路、照明、监控等设备进行数据的自动采集，出现异动，我们会迅速到达现场即时处理，有效降低轿箱困人、火灾、管路老化等风险和损失
            我们可以随时随地抽取关于您接房、装修、安全巡逻、设备巡检、报事报修、清洁定位的所有工作数据，从而帮助我们能不断优化社区服务方案。`,
    textC: `当然针对您家里的水、电、气等使用安全问题，我们也会进行监控，一旦出现问题都会自动报警直达“大管家”报事系统，物业人员将第一时间到达您家，及时处理安全隐患，为您的居家安全保驾护航。
            邻里互助活动会让您的社交圈变得更加丰富多彩，我们在创造圈层互动、共享互利的社会价值的同时，也会对活动排名进行统计，将会在未来设计更好更完善的邻里友好动。
            除此之外我们还将陆续为您打造的“100米智慧生活圈”的生态模式，为社区引入更多的互联网资源，包括我们已经开通的无人超市、自助售货柜、智能充电桩、智能支付等，竭力为您打造更便捷的社区服务！`,
    textD: `现在我们看到的是本营销中心的实时数据管理界面，由于现在项目还处于建设阶段，很多运营和服务工作的数据也还在接入过程中，未来正式接房运营后，我们会像打造天湖美镇智慧社区一样，根据您的偏好习惯，逐步完善社区科技物业服务，预先准备好更多的定制选项，为您的提供更贴心畅快的享受体验
            好了，小金已为大家介绍完毕，大家听累了吗？小金预祝大家看房愉快！为大家播放一首音乐吧。
            不客气呢。`,
};

export { provinceData, satisfiedData, monthData, deviceData, warnData, audioText };