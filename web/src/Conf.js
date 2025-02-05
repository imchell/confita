// Copyright 2021 The casbin Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

export const AuthConfig = {
  // serverUrl: "https://door.casbin.com",
  serverUrl: "http://localhost:7001",
  clientId: "4204b22726f5ff8c9efe",
  appName: "app-confita",
  organizationName: "casbin",
  redirectPath: "/callback",
};

export const IsConferenceMode = true;

export const DefaultOwner = "admin";
export const DefaultConferenceName = "conference_0";
export const TestAffiliation = "";

export const paymentInfo = "";
export const paymentInfoEn = "";
export const isPaymentRequired = true;

export const ForceLanguage = "";
export const DefaultLanguage = "en";

// export const CasnodeEndpoint = "https://forum.casbin.com";
export const CasnodeEndpoint = "http://localhost:3000";

export const QrCodeImageUrl = "";

export const ContactInfo = [];
