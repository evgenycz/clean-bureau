from django.db import models


# Create your models here.

class Languages(models.Model):
    header_all = models.JSONField()

def create_languages():
    header_all_data = {
        "HeaderAll":{
            'cz': [
                {
                    'headerEl1': "Služby",
                    'headerEl2': "Ceny",
                    'headerEl3': "Recenze",
                    'headerEl4': "Kontakty",
                },
            ],
            'en': [
                {
                    'headerEl1': "Services",
                    'headerEl2': "Prices",
                    'headerEl3': "Reviews",
                    'headerEl4': "Contacts",
                },
            ],
            'ru': [
                {
                    'headerEl1': "Услуги",
                    'headerEl2': "Цены",
                    'headerEl3': "Отзывы",
                    'headerEl4': "Контакты",
                },
            ],
            'uk': [
                {
                    'headerEl1': "Послуги",
                    'headerEl2': "Ціни",
                    'headerEl3': "Відгуки",
                    'headerEl4': "Контакти",
                },
            ]
            }
    }
    header_quest_data = {
        "HeaderQuest":{
                    'cz': [
                {
                    'titleCon': "Pokud máte jakékoli dotazy, napište nám",
                },
            ],
            'en': [
                {
                    'titleCon': "If you have any questions, write to us",
                },
            ],
            'ru': [
                {
                    'titleCon': "Если у вас есть вопросы, напишите нам",
                },
            ],
            'uk': [
                {
                    'titleCon': "Якщо у вас є питання, напишіть нам",
                },
            ],
        }
    }

    body_order_data = {
        "BodyOrder": {
        'cz': [
            {
                'orderEl1': "My uklidíme. ",
                'orderEl2': "Vy odpočíváte.",
            },
        ],
        'en': [
            {
                'orderEl1': "We are cleaning. ",
                'orderEl2': "You are resting.",
            },
        ],
        'ru': [
            {
                'orderEl1': "Мы убираем. ",
                'orderEl2': "Вы отдыхаете.",
            },
        ],
        'uk': [
            {
                'orderEl1': "Ми прибираємо. ",
                'orderEl2': "Ви відпочиваєте.",
            },
        ],
    }
    }

    body_order_sec_data = {
        "BodyOrder2": {
        'cz': [
            {
                    'orderEl':
                        "Úklid prostor v Praze - údržbový, komplexní, generální",
                },
        ],
        'en': [
            {
                    'orderEl':
                        "Cleaning of premises in Prague - maintenance, comprehensive, general",
                },
        ],
        'ru': [
            {
                    'orderEl':
                        "Уборка помещений в Праге - поддерживающая, комплексная, генеральная",
                },
        ],
        'uk': [
            {
                    'orderEl':
                        "Прибирання приміщень у Празі - підтримуюче, комплексне, генеральне",
                },
        ],
    }
    }

    order_butt_data = {
        "OrderButton": {
        'cz': [
            {
                    'orderBut': "Objednat",
                },
        ],
        'en': [
            {
                    'orderBut': "Order",
                },
        ],
        'ru': [
            {
                    'orderBut': "Заказать",
                },
        ],
        'uk': [
            {
                    'orderBut': "Замовити",
                },
        ],
    }
    }

    placeholder_form_data = {
        "PlaceholderForm": {
        'cz': [
            {
                    'name': "Jmeno",
                    'surname': "Příjmení",
                    'user_mail': "Mail",
                    'telefon': "Telefon",
                    'TypeOfBulding': "Typ budovy",
                    'Rooms': "Počet místností",
                    'AreaOfRooms': "Plocha místností",
                    'Bathrooms': "Počet koupelen",
                    'TypeOfCleaning': "Typ uklizení",
                    'Services': "Doplňkové služby",
                    'comments': "Komentáře",
                    'lastCleaning': "Poslední profesionální úklid",
                    'time': "Čas",
                    'price': "Cena",
                },
        ],
        'en': [
            {
                    'name': "Name",
                    'surname': "Surname",
                    'user_mail': "Mail",
                    'telefon': "Phone",
                    'TypeOfBulding': "Type of building",
                    'Rooms': "Number of rooms",
                    'AreaOfRooms': "Area of rooms",
                    'Bathrooms': "Number of bathrooms",
                    'TypeOfCleaning': "Type of cleaning",
                    'Services': "Additional services",
                    'comments': "Comments",
                    'lastCleaning': "Last professional cleaning",
                    'time': "Time",
                    'price': "Price",
                },
        ],
        'ru': [
            {
                    'name': "Имя",
                    'surname': "Фамилия",
                    'user_mail': "Mail",
                    'telefon': "Телефон",
                    'TypeOfBulding': "Тип здания",
                    'Rooms': "Кол-во помещений",
                    'AreaOfRooms': "Площадь помещений",
                    'Bathrooms': "Кол-во санузлов",
                    'TypeOfCleaning': "Вид уборки",
                    'Services': "Дополнительные услуги",
                    'comments': "Комментарии",
                    'lastCleaning': "Последняя профессиональная уборка",
                    'time': "Время",
                    'price': "Цена",
                },
        ],
        'uk': [
            {
                    'name': "Ім'я",
                    'surname': "Прізвище",
                    'user_mail': "Mail",
                    'telefon': "Телефон",
                    'TypeOfBulding': "Тип будівлі",
                    'Rooms': "Кількість приміщень",
                    'AreaOfRooms': "Площа кімнат",
                    'Bathrooms': "Cанвузли",
                    'TypeOfCleaning': "Вид прибирання",
                    'Services': "Додаткові послуги",
                    'comments': "Коментарі",
                    'lastCleaning': "Останнє професійне прибирання",
                    'time': "Час",
                    'price': "Ціна",
                },
        ],
    }
    }

    validator_data = {
            "Validation": {
                'cz': [
                    {
                    'validEmpty': "*Pole je povinné",
                    'validMail': "*Neplatná e-mailová adresa",
                    'validNumber': "*Musí být 9 číslic",
                    'validNumberExist': "*Musí být pouze číslice",
                    'validNull': "*Musí být více než nula",
                    'validLetter': "*Musí být pouze pismena",
                    'validTen': "*Musí být více než deset",
                    },
                ],
            'en': [
                {
                    'validEmpty': "*Field is required",
                    'validMail': "*Invalid email address",
                    'validNumber': "*Must be 9 digits",
                    'validNumberExist': "*Must be only digits",
                    'validNull': "*Must be more than zero",
                    'validLetter': "*Must be only letters",
                    'validTen': "*Must be more than ten",
                },
            ],
            'ru': [
                {
                    'validEmpty': "*Поле обязательно для ввода",
                    'validMail': "*Неверный адрес электронной почты",
                    'validNumber': "*Должно быть 9 цифр",
                    'validNumberExist': "*Должны быть только цифры",
                    'validNull': "*Должно быть больше ноля",
                    'validLetter': "*Должны быть только буквы",
                    'validTen': "*Должно быть больше десяти",
                },
            ],
            'uk': [
                {
                    'validEmpty': "*Поле обов'язкове для введення",
                    'validMail': "*Недійсна адреса електронної пошти",
                    'validNumber': "*Повинно бути 9 цифр",
                    'validNumberExist': "*Мають бути лише цифри",
                    'validNull': "*Має бути більше нуля",
                    'validLetter': "*Мають бути лише літери",
                    'validTen': "*Має бути більше десяти",
                },
            ],
    }
    }

    selector_time_data = {
            "SelectorTime": {
            'cz': [
                {
                    'timeW': "Méně než před měsícem",
                    'timeM': "Před více než měsícem",
                    'time3M': "Před více než třemi měsíci",
                },
            ],
            'en': [
                {
                    'timeW': "Less than a month ago",
                    'timeM': "Over a month ago",
                    'time3M': "Over three months ago",
                },
            ],
            'ru': [
                {
                    'timeW': "Менее месяца назад",
                    'timeM': "Более месяца назад",
                    'time3M': "Более трёх месяцев назад",
                },
            ],
            'uk': [
                {
                    'timeW': "Менше місяця тому",
                    'timeM': "Більше місяця тому",
                    'time3M': "Більше трьох місяців тому",
                },
            ],
    }
    }

    selector_building_data = {
            "SelectorBuilding": {
            'cz': [
                {
                    'buildingAdmin': "Administrativní budova",
                    'buildingHome': "Rodiný dům",
                    'buildingApart': "Byt",
                },
            ],
            'en': [
                {
                    'buildingAdmin': "Administrative building",
                    'buildingHome': "Family house",
                    'buildingApart': "Apartment",
                },
            ],
            'ru': [
                {
                    'buildingAdmin': "Административное здание",
                    'buildingHome': "Частный дом",
                    'buildingApart': "Квартира",
                },
            ],
            'uk': [
                {
                    'buildingAdmin': "Адміністративна будівля",
                    'buildingHome': "Приватний будинок",
                    'buildingApart': "Квартира",
                },
            ],
    }
    }

    selector_clean_data = {
        "SelectorClean": {
            'cz': [
                {
                    'typeCleanGen': "Generální",
                    'typeCleanCom': "Komplexní",
                    'typeCleanMain': "Údržbový",
                },
            ],
            'en': [
                {
                    'typeCleanGen': "General",
                    'typeCleanCom': "Comprehensive",
                    'typeCleanMain': "Maintenance",
                },
            ],
            'ru': [
                {
                    'typeCleanGen': "Генеральная",
                    'typeCleanCom': "Комплексная",
                    'typeCleanMain': "Поддерживающая",
                },
            ],
            'uk': [
                {
                    'typeCleanGen': "Генеральне",
                    'typeCleanCom': "Комплексне",
                    'typeCleanMain': "Підтримуюче",
                },
            ],
    }
    }

    services_state_data = {
        "ServicesState": {
            'cz': [
                {
                    'ironing': "Žehlení",
                    'Window': "Mytí oken",
                    'keyDelivery': "Jednosměrné doručení klíčů",
                    'RefrigeratorWith': "Čištění lednice (s obsahem)",
                    'RefrigeratorWithout': "Čištění lednice (bez obsahu)",
                    'Microwave': "Čištění mikrovlnné trouby",
                    'Oven': "Čištění uvnitř trouby",
                    'Exhaust': "Čištění digestoře",
                    'Chandelier': "Čištění lustry",
                },
            ],
            'en': [
                {
                    'ironing': "Ironing",
                    'Window': "Window washing",
                    'keyDelivery': "One-way key delivery",
                    'RefrigeratorWith': "Refrigerator cleaning (with contents)",
                    'RefrigeratorWithout':
                        "Refrigerator cleaning (without contents)",
                    'Microwave': "Microwave cleaning",
                    'Oven': "Inside oven cleaning",
                    'Exhaust': "Exhaust hood cleaning",
                    'Chandelier': "Chandelier cleaning",
                },
            ],
            'ru': [
                {
                    'ironing': "Глажка",
                    'Window': "Мойка окон",
                    'keyDelivery': "Доставка ключей в один конец",
                    'RefrigeratorWith': "Мойка холодильника(с продуктами)",
                    'RefrigeratorWithout': "Мойка холодильника(без продуктов)",
                    'Microwave': "Мойка СВЧ-печи",
                    'Oven': "Мойка внутри духовки",
                    'Exhaust': "Мойка вытяжки",
                    'Chandelier': "Мойка люстры",
                },
            ],
            'uk': [
                {
                    'ironing': "Прасування",
                    'Window': "Миття вікон",
                    'keyDelivery': "Одностороння доставка ключів",
                    'RefrigeratorWith': "Миття холодильника (з продуктами)",
                    'RefrigeratorWithout': "Миття холодильника (без продуктів)",
                    'Microwave': "Миття мікрохвильової печі",
                    'Oven': "Миття всередині духовки",
                    'Exhaust': "Миття витяжки",
                    'Chandelier': "Миття люстри",
                },
            ],
    }
    }
    
    list_order_data = {
        "ListOrder": {
            'cz': [
                {
                    'Quality': "Záruka pojištění a kvality",
                    'Schedule': "Spravujte pracovní harmonogram",
                    'Products': "Používáme ekologické prostředky",
                    'Deadlines': "Dodržujeme slíbené termíny",
                },
            ],
            'en': [
                {
                    'Quality': "Insurance and Quality Guarantee",
                    'Schedule': "Manage Work Schedule",
                    'Products': "Use Eco-Friendly Products",
                    'Deadlines': "Adhere to Promised Deadlines",
                },
            ],
            'ru': [
                {
                    'Quality': "Гарантия страхования и качества",
                    'Schedule': "Управляйте графиком работы",
                    'Products': "Используем экологичные средства",
                    'Deadlines': "Соблюдаем обещанные сроки",
                },
            ],
            'uk': [
                {
                    'Quality': "Гарантія страхування та якості",
                    'Schedule': "Керуйте робочим графіком",
                    'Products': "Використовуємо екологічні засоби",
                    'Deadlines': "Дотримуємося обіцяних термінів",
                },
            ],
    }
    }

    head_services_data = {
        "HeadServices": {
            'cz': [
                {
                    'TypesClean': "Typy úklidu",
                    'TypeOfF': "Údržbový",
                    'TypeOfS': "Komplexní",
                    'TypeOfT': "Generální",
                    'TextOfTypeF':"Údržbový úklid je potřebný k udržení čistoty a pořádku v domě",
                    'TextOfTypeS':"Komplexní úklid je potřebný pro důkladnější úklid v domě",
                    'TextOfTypeT':"Při generálním úklidu se kuchyně myje kompletně včetně skříněk a vestavěných spotřebičů",
                    'People': " pracovníci",
                    'CheckListF': "Kontrolní seznam 30 bodů",
                    'CheckListS': "Kontrolní seznam 40 bodů",
                    'CheckListT': "Kontrolní seznam 50 bodů",
                    'Time': " hodiny",
                    'TimeT': " hodin",
                },
            ],
            'en': [
                {
                    'TypesClean': "Types of cleaning",
                    'TypeOfF': "Maintenance",
                    'TypeOfS': "Comprehensive",
                    'TypeOfT': "General",
                    'TextOfTypeF':"Maintenance cleaning is necessary for maintaining cleanliness and order in the home",
                    'TextOfTypeS':"Comprehensive cleaning is required for more thorough house cleaning",
                    'TextOfTypeT':"During the general cleaning, the kitchen is completely washed, including the cabinets and built-in appliances",
                    'People': " cleaners",
                    'CheckListF': "Checklist of 30 items",
                    'CheckListS': "Checklist of 40 items",
                    'CheckListT': "Checklist of 50 items",
                    'Time': " hours",
                    'TimeT': " hours",
                },
            ],
            'ru': [
                {
                    'TypesClean': "Виды уборки",
                    'TypeOfF': "Поддерживающая",
                    'TypeOfS': "Комплексная",
                    'TypeOfT': "Генеральная",
                    'TextOfTypeF':"Поддерживающая уборка нужна для сохранения чистоты и порядка в доме",
                    'TextOfTypeS':"Комплексная уборка нужна для более тщательной уборки в доме",
                    'TextOfTypeT':"При генеральной уборке кухня вымывается полностью, включая шкафы и встроенную технику",
                    'People': " исполнителя",
                    'CheckListF': "Чеклист из 30 пунктов",
                    'CheckListS': "Чеклист из 40 пунктов",
                    'CheckListT': "Чеклист из 50 пунктов",
                    'Time': " часа",
                    'TimeT': " часов",
                },
            ],
            'uk': [
                {
                    'TypesClean': "Види прибирання",
                    'TypeOfF': "Підтримуюче",
                    'TypeOfS': "Комплексне",
                    'TypeOfT': "Генеральне",
                    'TextOfTypeF':"Підтримуюче прибирання потрібне для збереження чистоти та порядку в домі",
                    'TextOfTypeS':"Комплексне прибирання потрібне для більш ретельного прибирання в домі",
                    'TextOfTypeT':"Під час генерального прибирання кухня миється повністю, включаючи шафи та вбудовану техніку",
                    'People': " виконавці",
                    'CheckListF': "Чек-лист з 30 пунктів",
                    'CheckListS': "Чек-лист з 40 пунктів",
                    'CheckListT': "Чек-лист з 50 пунктів",
                    'Time': " години",
                    'TimeT': " годин",
                },
            ],
    }
    }

    services_data = {
        "ServiceData": {
            'cz': [
                {
                    'Work':"Jak to funguje",
                    'Steps':"3 jednoduché kroky",
                    'TimeRequest':"Vyberte si vhodný čas a zanechte žádost",
                    'Standarts':"Podle standardů uklízíme váš byt",
                    'CompletedWork':"Přijmete dokončenou práci",
                },
            ],
            'en': [
                {
                    'Work':"How it works",
                    'Steps':"3 simple steps",
                    'TimeRequest':"Choose a convenient time and leave a request",
                    'Standarts':"According to standards, we clean your apartment.",
                    'CompletedWork':"Accept the completed work.",
                },
            ],
            'ru': [
                {
                    'Work':"Как это работает",
                    'Steps':"3 простых шага",
                    'TimeRequest':"Выбираете удобное для Вас время и оставляете заявку",
                    'Standarts':"Согласно стандартам, мы убираем Вашу квартиру",
                    'CompletedWork':"Принимаете выполненную работу",
                },
            ],
            'uk': [
                {
                    'Work':"Як це працює",
                    'Steps':"3 простих кроки",
                    'TimeRequest':"Оберіть зручний для вас час і залиште заявку",
                    'Standarts':"За стандартами ми прибираємо вашу квартиру",
                    'CompletedWork':"Приймаєте виконану роботу",
                },
            ],
    }
    }

    slider_data = {
        "SliderData": {
            'cz': [
                {
                    'Kitchen':"Kuchyně",
                    'LivingRoom':"Obývací pokoj",
                    'Bathroom':"Koupelna"
                },
            ],
            'en': [
                {
                    'Kitchen':"Kitchen",
                    'LivingRoom':"Living room",
                    'Bathroom':"Bathroom"
                },
            ],
            'ru': [
                {
                    'Kitchen':"Кухня",
                    'LivingRoom':"Гостиная",
                    'Bathroom':"Ванна"
                },
            ],
            'uk': [
                {
                    'Kitchen':"Кухня",
                    'LivingRoom':"Вітальня",
                    'Bathroom':"Ванна кімната"
                },
            ],
    }
    }

    slider_text_kitchen = {
        "SliderTextKitchen": {
            'cz': [
                {
                    'El1Kitchen':"Myjeme kuchyňský front",
                    'El2Kitchen':"Myjeme kuchyňský panel",
                    'El3Kitchen':"Čistíme fasádu odsavače",
                    'El4Kitchen':"Myjeme nádobí až 10 minut",
                    'El5Kitchen':"Myjeme dřez a odstraňujeme usazeniny",
                    'El6Kitchen':"Myjeme vrchní desku a venkovní část trouby",
                    'El7Kitchen':"Vynášíme odpadky",
                    'El8Kitchen':"Utíráme pracovní desku",
                    'El9Kitchen':"Myjeme podlahu a sokly",
                    'El10Kitchen':"Utíráme VŠECHNY dosažitelné povrchy do 1,5 m",
                },
            ],
            'en': [
                {
                    'El1Kitchen':"Wash the kitchen cabinet fronts",
                    'El2Kitchen':"Clean the kitchen backsplash",
                    'El3Kitchen':"Clean the hood front",
                    'El4Kitchen':"Wash dishes for up to 10 min",
                    'El5Kitchen':"Clean the sink and remove limescale",
                    'El6Kitchen':"Clean the stovetop and oven on the outside",
                    'El7Kitchen':"Take out the trash",
                    'El8Kitchen':"Wipe the countertops",
                    'El9Kitchen':"Clean the floor and wipe the baseboards",
                    'El10Kitchen':"Wipe ALL accessible surfaces up to 1.5 m",
                },
            ],
            'ru': [
                {
                    'El1Kitchen':"Моем кухонный фасад",
                    'El2Kitchen':"Моем кухонный фартук",
                    'El3Kitchen':"Чистим фасад вытяжки",
                    'El4Kitchen':"Моем посуду до 10 мин",
                    'El5Kitchen':"Моем раковину и удаляем налет",
                    'El6Kitchen':"Моем плиту и духовку снаружи",
                    'El7Kitchen':"Выносим мусор",
                    'El8Kitchen':"Протираем столешницу",
                    'El9Kitchen':"Моем пол и плинтуса",
                    'El10Kitchen':"Протираем ВСЕ доступные поверхности до 1,5 м",
                },
            ],
            'uk': [
                {
                    'El1Kitchen':"Миємо фасад кухонного шафи",
                    'El2Kitchen':"Миємо кухонний фартук",
                    'El3Kitchen':"Чистимо фасад витяжки",
                    'El4Kitchen':"Миємо посуд до 10 хвилин",
                    'El5Kitchen':"Миємо раковину і видаляємо нальот",
                    'El6Kitchen':"Миємо плиту і духовку ззовні",
                    'El7Kitchen':"Вивозимо сміття",
                    'El8Kitchen':"Протираємо стільницю",
                    'El9Kitchen':"Миємо підлогу і плінтуси",
                    'El10Kitchen':"Протираємо ВСІ доступні поверхні до 1,5 м",
                },
            ],
    }
    }

    slider_text_living = {
        "SliderTextLivingRoom": {
            'cz': [
                {
                    'El1Living':"Utíráme zrcadla a skleněné povrchy",
                    'El2Living':"Utíráme dveřní kliky",
                    'El3Living':"Utíráme stojací lampy a stěnové lampy",
                    'El4Living':"Vyměňujeme povlečení a stelíme postel (na vyžádání)",
                    'El5Living':"Utíráme VŠECHNY dosažitelné povrchy do 1,5 m",
                    'El6Living':"Vysáváme koberce",
                    'El7Living':"Vysáváme pohovky a polštáře na pohovkách",
                    'El8Living':"Myjeme podlahu a sokly",
                },
            ],
            'en': [
                {
                    'El1Living':"Wipe mirrors and glass surfaces",
                    'El2Living':"Wipe door handles",
                    'El3Living':"Wipe floor lamps and wall sconces",
                    'El4Living':"Change bed linen and make the bed (upon request)",
                    'El5Living':"Wipe ALL accessible surfaces up to 1.5 m",
                    'El6Living':"Vacuum carpets",
                    'El7Living':"Vacuum sofas and sofa cushions",
                    'El8Living':"Clean the floor and baseboards",
                },
            ],
            'ru': [
                {
                    'El1Living':"Протираем зеркала и стеклянные поверхности",
                    'El2Living':"Протираем дверные ручки",
                    'El3Living':"Протираем торшеры и настенные бра",
                    'El4Living':"Меняем постельное белье и застилаем кровать (по запросу)",
                    'El5Living':"Протираем ВСЕ доступные поверхности до 1,5 м",
                    'El6Living':"Пылесосим ковры",
                    'El7Living':"Пылесосим диваны и диванные подушки",
                    'El8Living':"Моем пол и плинтуса",
                },
            ],
            'uk': [
                {
                    'El1Living':"Протираємо дзеркала і скляні поверхні",
                    'El2Living':"Протираємо дверні ручки",
                    'El3Living':"Протираємо торшери і настінні бра",
                    'El4Living':"Міняємо постільну білизну і застеляємо ліжко (за запитом)",
                    'El5Living':"Протираємо ВСІ доступні поверхні до 1,5 м",
                    'El6Living':"Пилососимо килими",
                    'El7Living':"Пилососимо дивани і диванні подушки",
                    'El8Living':"Миємо підлогу і плінтуси",
                },
            ],
    }
    }

    slider_text_bathroom = {
        "SliderTextBathRoom": {
            'cz': [
                {
                    'El1Bathroom':"Myjeme zrcadla",
                    'El3Bathroom':"Otíráme VŠECHNY dosažitelné povrchy do 1,5 m",
                    'El4Bathroom':"Myjeme umyvadlo a odstraníme vodní kámen",
                    'El5Bathroom':"Leštime baterie",
                    'El6Bathroom':"Myjeme vanu / sprchový kout",
                    'El7Bathroom':"Čistíme a dezinfikujeme WC",
                },
            ],
            'en': [
                {
                    'El1Bathroom':"Clean mirrors",
                    'El3Bathroom':"Wipe ALL accessible surfaces up to 1.5 m",
                    'El4Bathroom':"Clean the sink and remove limescale",
                    'El5Bathroom':"Polish faucets",
                    'El6Bathroom':"Clean the bathtub / shower cabin",
                    'El7Bathroom':"Clean and disinfect the toilet bowl",
                },
            ],
            'ru': [
                {
                    'El1Bathroom':"Моем зеркала",
                    'El3Bathroom':"Протираем ВСЕ доступные поверхности до 1,5 м",
                    'El4Bathroom':"Моем раковину и удаляем водный камен",
                    'El5Bathroom':"Натираем смесители",
                    'El6Bathroom':"Моем ванну /душевую кабину",
                    'El7Bathroom':"Чистим и дезинфицируем унитаз",
                },
            ],
            'uk': [
                {
                    'El1Bathroom':"Миємо дзеркала",
                    'El3Bathroom':"Протираємо ВСІ доступні поверхні до 1,5 м",
                    'El4Bathroom':"Миємо раковину і видаляємо вапнякові відкладення",
                    'El5Bathroom':"Натираємо змішувачі",
                    'El6Bathroom':"Миємо ванну / душову кабіну",
                    'El7Bathroom':"Чистимо і дезинфікуємо унітаз",
                },
            ],
    }
    }

    form_text_notes = {
        "FormTextNotes": {
            'cz': [
                {
                    'NameText':"Zadejte své jméno",
                    'LastNameText':"Zadejte své příjmení",
                    'PhoneText': "Zadejte telefonní číslo bez předčíslí",
                    'MailText':"Zadejte svůj e-mail",
                    'CleanText':"Vyberte typ budovy, ve které bude proveden úklid",
                    'RoomText':"Zadejte celkový počet místností, ve kterých bude proveden úklid",
                    'AreaText':"Zadejte celkovou plochu místností, ve kterých bude proveden úklid",
                    'WCText':"Zadejte počet koupelen a WC",
                    'CleanTypText':"Vyberte typ úklidu",
                    'LastCleanText':"Vyberte ze seznamu, kdy naposledy byl proveden profesionální úklid",
                },
            ],
            'en': [
                {
                    'NameText':"Enter your first name",
                    'LastNameText':"Enter your last name",
                    'PhoneText': "Enter the phone number without the mobile code",
                    'MailText':"Enter your email",
                    'CleanText':"Choose the type of building where cleaning will be performed",
                    'RoomText':"Enter the total number of rooms where cleaning will be performed",
                    'AreaText':"Enter the total area of rooms where cleaning will be performed",
                    'WCText':"Enter the number of bathrooms",
                    'CleanTypText':"Choose the type of cleaning",
                    'LastCleanText':"Choose from the list when was the last time professional cleaning was done",
                },
            ],
            'ru': [
                {
                    'NameText':"Введите свое имя",
                    'LastNameText':"Введите свою фамилию",
                    'PhoneText': "Введите номер телефона без мобильного кода",
                    'MailText':"Введите электронную почту",
                    'CleanText':"Выберите тип здания, в котором будет проводиться уборка",
                    'RoomText':"Введите общее кол-во помещений, в которых будет проводиться уборка",
                    'AreaText':"Введите общую площадь помещений, в которых будет проводиться уборка",
                    'WCText':"Введите кол-во санузлов",
                    'CleanTypText':"Выберите вид уборки",
                    'LastCleanText':"Выберите из списка, когда в последний раз у Вас проводилась профессиональная уборка",
                },
            ],
            'uk': [
                {
                    'NameText':"Введіть своє ім'я",
                    'LastNameText':"Введіть своє прізвище",
                    'PhoneText': "Введіть номер телефону без мобільного коду",
                    'MailText':"Введіть адресу електронної пошти",
                    'CleanText':"Оберіть тип будівлі, де буде проводитися прибирання",
                    'RoomText':"Введіть загальну кількість кімнат, де буде проводитися прибирання",
                    'AreaText':"Введіть загальну площу кімнат, де буде проводитися прибирання",
                    'WCText':"Введіть кількість санвузлів",
                    'CleanTypText':"Оберіть вид прибирання",
                    'LastCleanText':"Оберіть із списку, коли востаннє проводилася професійна прибирання",
                },
            ],
    }
    }

    comments_text = {
        "CommentsText": {
            'cz': [
                {
                    'CommentF':"Na úklid jsem dříve věnovala obrovské množství času. Byla jsem ochotná dělat cokoli, jen abych se vyhnula úklidu. Teď je vše jinak - jednou týdně ke mně přijde úklidová společnost 'clean bureau'. Úklid probíhá rychle a kvalitně. A co je hlavní - teď se cítím tak lehce na duši",
                },
            ],
            'en': [
                {
                    'CommentF':"I used to spend a huge amount of time on cleaning. I was ready to do anything just to avoid cleaning. Now everything is different - once a week, the cleaning company 'clean bureau' comes to me. They clean everything thoroughly and quickly. And most importantly - now I feel so light in my soul!",
                },
            ],
            'ru': [
                {
                    'CommentF':"Я на уборку тратила огромное количество времени. Просто я готова была делать что угодно, лишь бы не убираться. Теперь все иначе - раз в неделю ко мне приходят из клининговой компании «clean bureau».Убирают все от и до, при этом реально быстро и качественно.А главное - у меня на душе теперь так легко!!",
                },
            ],
            'uk': [
                {
                    'CommentF':"Раніше я витрачала величезну кількість часу на прибирання. Я була готова робити все лише не прибирати. Тепер все інакше - раз на тиждень до мене приходить прибиральна компанія 'clean bureau'. Вони прибирають все від і до, причому швидко і якісно. І головне - тепер у мене на душі так легко!",
                },
            ],
    }
    }

    comments_header_text = {
        "CommentsHeaderText": {
            'cz': [
                {
                    'HeaderComments':"O nás",
                },
            ],
            'en': [
                {
                    'HeaderComments':"About Us",
                },
            ],
            'ru': [
                {
                    'HeaderComments':"О нас",
                },
            ],
            'uk': [
                {
                    'HeaderComments':"Про нас",
                },
            ],
    }
    }

    answer_text = {
        "AnswerText": {
            'cz': [
                {
                    'AnswerMain':"Odpovědi na otázky",
                    'QuestionF':"Můžu přesunout nebo zrušit úklid?",
                    'AnswerF':"Úklid můžete přesunout nebo zrušit nejpozději 24 hodin před stanoveným termínem. V opačném případě se účtuje 60% z ceny služby.",
                    'QuestionS':"Je mytí oken součástí úklidu?",
                    'AnswerS':"Ne, mytí oken je samostatná služba. Můžete si ji objednat společně s hlavním úklidem nebo samostatně.",
                    'QuestionT':"Musím být přítomen při úklidu?",
                    'AnswerT':"To není nutné. Můžete si objednat službu doručení klíčů, nebo uklízeč může zavřít dveře sám. Nicméně, pokud potřebujete být v tu dobu doma, pokusíme se vám nerušit.",                    'QuestionFo':"Co dělat, když uklízeč něco rozbije v bytě?",
                    'AnswerFo':"Pošlete nám fotky a co nejpodrobněji popište, co se stalo. Náklady vám kompenzujeme, zaplatíme opravu nebo koupíme novou věc místo poškozené. Aby se předešlo podobným situacím, informujte nás prosím o jakýchkoli křehkých/neukotvených předmětech a nestandardních mechanismech.",
                    'QuestionFi':"Co obsahuje generální úklid?",
                    'AnswerFi':"Kromě stejných úkolů jako při standardním úklidu zahrnuje: mytí kuchyňských skříněk uvnitř, mytí lednice, trouby, mikrovlnné trouby a digestoře uvnitř a odstranění vodního kamene ze stěn koupelny/sprchy.",                    
                    'QuestionSi':"Jak funguje předplatné na pravidelné úklidy?",
                    'AnswerSi':"Vyberete si vhodnou frekvenci služeb, minimálně jednou za dva týdny. Předplatné funguje na měsíční předplatné. Při pravidelném úklidu je klientovi přiřazen stálý uklízeč.",
                    'QuestionSe':"Co dělat, když nejsem spokojen s kvalitou úklidu?",
                    'AnswerSe':"Najdeme řešení co nejrychleji. Pokud můžete dělat fotografie, prosím, udělejte to a pošlete nám je přímo nebo přes posla. Obdržíte odpověď v co nejkratším čase a začneme hledat řešení. Reagujeme na kritiku a umíme napravit chyby.",
                },
            ],
            'en': [
                {
                    'AnswerMain':"Answers to questions",
                    'QuestionF':"Can I reschedule or cancel the cleaning?",
                    'AnswerF':"You can reschedule or cancel the cleaning no later than 24 hours before the appointed time. Otherwise, 60% of the service cost will be charged.",
                    'QuestionS':"Is window cleaning included in the cleaning service?",
                    'AnswerS':"No, window cleaning is a separate service. You can order it along with the main cleaning or independently.",
                    'QuestionT':"Do I need to be present during the cleaning?",
                    'AnswerT':"It's not necessary. You can arrange for key delivery service, or the cleaner can close the door themselves. However, if you need to be at home at that time, we will try not to disturb you.",                    
                    'QuestionFo':"What if the cleaner breaks something in the apartment?",
                    'AnswerFo':"Send us photos and describe what happened in as much detail as possible. We will compensate the cost, pay for the repair, or buy a new item in place of the damaged one. To avoid such situations, please inform us about any fragile/unsecured items and non-standard mechanisms.",
                    'QuestionFi':"What does a general cleaning include?",
                    'AnswerFi':"In addition to the same tasks as a standard cleaning, it includes: washing kitchen cabinets inside, washing the refrigerator, oven, microwave, and extractor hood inside, and removing limescale from the walls of the bathroom/shower.",                    
                    'QuestionSi':"How does the subscription for regular cleanings work?",
                    'AnswerSi':"You choose the appropriate frequency of service, at least once every two weeks. The subscription works with a monthly prepayment. With regular cleanings, a permanent cleaner is assigned to a client.",
                    'QuestionSe':"What if I am not satisfied with the quality of the cleaning?",
                    'AnswerSe':"We will find a solution as quickly as possible. If you can take pictures, please do so and send them to us directly or through messenger. You will receive a response promptly, and we will start looking for a solution. We respond to criticism and know how to correct mistakes.",
                },
            ],
            'ru': [
                {
                    'AnswerMain':"Ответы на вопросы",
                    'QuestionF':"Можно перенести дату уборки или отменить ее?",
                    'AnswerF':"Уборку можно перенести или отменить не позднее чем за 24 часа до назначенного времени. В другом случае оплачивается 60% от стоимости услуги.",
                    'QuestionS':"Мытьё окон включено в уборку?",
                    'AnswerS':"Нет, мытьё окон – это отдельная услуга.  Вы можете заказать её в комплексе с основной уборкой или самостоятельно.",
                    'QuestionT':"Мне обязательно присутствовать при уборке?",
                    'AnswerT':"Это не обязательно, можно заказать услугу доставки ключей или клинер захлопнет дверь сам. Но если вам нужно быть в это время дома, мы постараемся вам не мешать.",                    'QuestionFo':"Что делать, если клинер сломает что-нибудь в квартире?",
                    'AnswerFo':"Пришлите фотографии и как можно более подробно опишите случившееся. Мы компенсируем стоимость, оплатим ремонт или купим новую вещь взамен испорченной. Во избежание подобных ситуаций, пожалуйста, предупреждайте нас о хрупких/незакрепленных вещах и нестандартных механизмах.",
                    'QuestionFi':"Что в себя включает генеральная уборка?",
                    'AnswerFi':"Помимо тех же задач, что и при классической уборке, в нее входят: мойка кухонных шкафов внутри, мойка холодильника,  духовки, микроволновки и вытяжки внутри, удаление водного камня на стенах ванной комнаты/душевой.",
                    'QuestionSi':"Как работает подписка на регулярные уборки?",
                    'AnswerSi':"Выбираете подходящий вариант регулярности. Минимально 1 раз в 2 недели. Подписка работает по месячной предоплате. При регулярных уборках за клиентом закрепляется постоянный клинер.",
                    'QuestionSe':"Что делать если меня не устроило качество уборки?",
                    'AnswerSe':"Мы найдем решение максимально быстро. Если у вас есть возможность сделать фотографии - сделайте и пришлите нам в директ либо в мессенджеры. Вам ответят в кратчайшее время и начнут искать решение. Мы реагируем на критику и умеем исправлять ошибки.",
                },
            ],
            'uk': [
                {
                    'AnswerMain':"Відповіді на запитання",
                    'QuestionF':"Чи можу я перенести або скасувати прибирання?",
                    'AnswerF':"Ви можете перенести або скасувати прибирання не пізніше, ніж за 24 години до призначеного часу. В іншому випадку сплачується 60% від вартості послуги.",
                    'QuestionS':"Чи включається миття вікон у прибирання?",
                    'AnswerS':"Ні, миття вікон - це окрема послуга. Ви можете замовити її разом з основним прибиранням або окремо.",
                    'QuestionT':"Чи обов'язково мені бути присутнім під час прибирання?",
                    'AnswerT':"Це не обов'язково, можна замовити послугу доставки ключів, або клінер зачинить двері сам. Але якщо вам потрібно бути в цей час вдома, ми постараємося вам не заважати.",                    'QuestionFo':"Що робити, якщо клінер щось зламає в квартирі?",
                    'AnswerFo':"Надішліть фотографії та якомога детальніше опишіть сталося. Ми компенсуємо вартість, оплатимо ремонт або купимо нову річ замість зіпсованої. Щоб уникнути подібних ситуацій, будь ласка, повідомляйте нас про крихкі/незакріплені речі та нестандартні механізми.",
                    'QuestionFi':"Що включає генеральне прибирання?",
                    'AnswerFi':"Крім тих самих завдань, що і при класичному прибиранні, до неї входять: миття кухонних шаф внутрішньо, миття холодильника, духовки, мікрохвильовки та витяжки зсередини, видалення водного каменю на стінах ванної кімнати/душової.",
                    'QuestionSi':"Як працює передплата на регулярні прибирання?",
                    'AnswerSi':"Вибираєте відповідний варіант регулярності. Мінімум 1 раз на 2 тижні. Передплата працює за місячну передоплату. При регулярних прибираннях за клієнтом закріплюється постійний клінер.",
                    'QuestionSe':"Що робити, якщо мене не влаштувала якість прибирання?",
                    'AnswerSe':"Ми знайдемо рішення максимально швидко. Якщо у вас є можливість зробити фотографії - зробіть і надішліть нам у директ або в месенджери. Вам відповідять у найкоротший термін і почнуть шукати рішення. Ми реагуємо на критику і вміємо виправляти помилки.",
                },
            ],
    }
    }

    Footer_text = {
        "FooterText": {
            'cz': [
                {
                    'FooterElement':"Jsme úklidová kancelář zcela jiné úrovně služeb v Praze. Především, jako ideové vedení, jsme nároční na sebe a poté i na naše zaměstnance. Naši zaměstnanci prošli přísným výběrem při náboru. Každý odpovídá normám a principům naší společnosti. Poskytujeme širokou a hlavně kvalitní sadu základních úklidových služeb. Kromě toho nabízíme řadu dalších funkcí, které vám usnadní život a nám zpříjemní dosažení výsledků. V případě dotazů nám napište",
                },
            ],
            'en': [
                {
                    'FooterElement':"We are a cleaning bureau of a completely different level of service in Prague. First and foremost, as the ideological leadership, we are demanding of ourselves and then of our employees. Our staff has undergone strict selection when being hired. Each meets the standards and principles of our company. We provide a wide and most importantly, high-quality set of basic cleaning services. Additionally, our range includes many additional functions that will make your life easier and ours happier, due to the achievement of results. If you have any questions, please write to us",
                },
            ],
            'ru': [
                {
                    'FooterElement':"Мы - бюро чистоты и совершенно иного уровня сервис в Праге. В первую очередь, мы, как идейноеруководство, требовательны к себе, а потом уже и к нашим сотрудникам. Наши сотрудники прошлистрогий отбор при приеме на работу. Каждый соответсвует нормам и принципам нашей компании.Мы предоставляем широкий и главное качественный набор базовых клининговых услуг. А так же,в нашем спектре существует множество дополнительных функций, которые сделают вашу жизньлегче, а нашу - радостней, от достижения результата. В случае возникновения вопросов, пишите нам",
                },
            ],
            'uk': [
                {
                    'FooterElement':"Ми - бюро чистоти та зовсім іншого рівня сервісу в Празі. Перш за все, ми, як ідеологічне керівництво, вимогливі до себе, а потім і до наших співробітників. Наші співробітники пройшли суворий відбір при прийомі на роботу. Кожен відповідає нормам та принципам нашої компанії. Ми надаємо широкий і головне якісний набір базових клінінгових послуг. А також, у нашому спектрі існує багато додаткових функцій, які зроблять ваше життя легшим, а наше - радіснішим, від досягнення результату. У разі виникнення питань, пишіть нам.",
                },
            ],
    }
    }

    Post_toast = {
        "ToastText": {
            'cz': [
                {
                    'ToastEl':"Vaše žádost byla přijata. Očekávejte email.",
                },
            ],
            'en': [
                {
                    'ToastEl':"Your application has been accepted. Await an email.",
                },
            ],
            'ru': [
                {
                    'ToastEl':"Ваша заявка принята. Ожидайте меил",
                },
            ],
            'uk': [
                {
                    'ToastEl':"Вашу заявку прийнято. Очікуйте електронного листа.",
                },
            ],
    }
    }

    combined_data = {**header_all_data, **header_quest_data, **body_order_data, **body_order_sec_data, **order_butt_data, **placeholder_form_data, **validator_data, **selector_time_data, **selector_building_data, **selector_clean_data, **services_state_data, **list_order_data, **head_services_data, **services_data, **slider_data, **slider_text_kitchen, **slider_text_living, **slider_text_bathroom, **form_text_notes, **comments_text, **comments_header_text, **answer_text, **Footer_text, **Post_toast}

    language_entry = Languages(header_all=combined_data)
    language_entry.save()
