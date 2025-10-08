from odoo import fields, models, api

class ResConfigSettings(models.TransientModel):
    _inherit = "res.config.settings"

    google_places_api_key = fields.Char(string='Google Places API Key',config_parameter='mbs_signup_address_fields.google_maps_api_key')


    