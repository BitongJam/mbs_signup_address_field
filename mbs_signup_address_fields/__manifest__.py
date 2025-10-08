# -*- coding: utf-8 -*-
{
    'name': 'MBS Signup Address Fields',
    'version': '18.0.1.0.0',
    'category': 'MBS/Tools',
    'summary': 'This module is extended of signup_address_fields_fl1 module.',
    'author': 'James Michael Ortiz',
    'depends': ['base','signup_address_fields_fl1','mail','web'],
    'data':[
        'views/auth_signup_template.xml',
        'views/res_config_settings.xml'
    ],
    'assets':{
        'web.assets_frontend_minimal':[
            'mbs_signup_address_fields/static/src/js/auth_signup.js'
        ]
    },
    'installable': True,
    'auto_install': False,  
    'application': True
}