
# Azure Login Settings
variable "subscription_id" {}
variable "tenant_id" {}
variable "client_id" {}
variable "client_secret" {}

#Infrastructure Settings
variable "location" {
    type = string
}
variable "backup_location" {
    type = string
}
variable "resource_group_name" {
    type = string
}
variable "depot_resource_group_name" {
    type = string
}
variable "remote_state_storage_account_name" {
    type = string
}
variable "application_name" {
    type = string
}
variable "environment" {
    type = string
}
variable "vnet_id" {
    type = string
}
variable "vnet_id_secondary" {
    type = string
}
variable "subnet_name" {
    type = string
}
variable "subnet_name_secondary" {
    type = string
}
variable "subnet_id" {
    type = string
}
variable "subnet_id_secondary" {
    type = string
}
variable "public_ip_id_primary" {
    type = string
}
variable "primary_public_ip_fqdn" {
    type = string
}
variable "public_ip_id_secondary" {
    type = string
}
variable "secondary_public_ip_fqdn" {
    type = string
}
variable "application_url_dev" {
    type = string
}
variable "api_url_dev" {
    type = string
}
variable "admin_url_dev" {
    type = string
}
variable "primary_application_appservice_hostname"{
    type = string
}
variable "secondary_application_appservice_hostname" {
    type = string
}
variable "application_appservice_name_primary" {
    type = string
}
variable "application_appservice_name_secondary" {
    type = string
}
variable "primary_api_appservice_hostname" {
    type = string
}
variable "secondary_api_appservice_hostname" {
    type = string
}
variable "primary_admin_appservice_hostname" {
    type = string
}
variable "secondary_admin_appservice_hostname" {
    type = string
}
variable "diagnostic_storage_account_id" {
    type = string
}
variable "secondary_diagnostic_storage_account_id" {
    type = string
}
variable "staging_docker_registry" {
    type = string
}
variable "staging_docker_container" {
    type = string
}
variable "staging_docker_registry_username" {
    type = string
}
variable "staging_docker_registry_password" {
    type = string
}
variable "relative_dns_name" {
    type = string
}
variable "healthcheck_page" {
    type = string
}
variable "domain_wildcard" {
    type = string
}